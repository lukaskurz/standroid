import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as admin from "firebase-admin";
import { Schedule } from './schedule';
import { Member } from './member';
import { Standup } from './standup';
import * as http from "http";
import { Report } from './report';
import { Installation } from './installation';

admin.initializeApp();
const db = admin.firestore();

export const get_time = functions.https.onRequest(async (request, response) => {
    return response.status(200).set("Accept", "application/json").send(JSON.stringify(convertToOtherTimezone(new Date(), 3600).toString()));
});

interface SlackEvent {
    team_id: string;
    event: {
        type: string,
        subtype?: string,
        text: string,
        user: string,
        channel: string
    }
}

export const slack_event = functions.https.onRequest(async (request, response) => {
    console.log(`Got slack message from ${request.hostname} - ${request.host}`);
    const body: SlackEvent = request.body;
    console.log(`Message body: ${JSON.stringify(request.body)}`);

    if(body.event.subtype !== undefined){
        response.status(200).send();
        return;
    }
    const installation: Installation = (await db.collection("installations").doc(body.team_id).get()).data() as Installation;
    const standupRefs = await db.collection("standups")
        .where("memberId", "==", body.event.user)
        .where("finished", "==", false).get();

    console.log(`Got ${standupRefs.size} standups matched to message`);
    if (standupRefs.size > 0) {
        const standup: Standup = standupRefs.docs[0].data() as Standup;
        standup.answers.push(body.event.text);
        if (standup.answers.length === standup.questions.length) {
            standup.finished = true;
        } else {
            const question = standup.questions[standup.answers.length];
            sendSlackMessage(installation, body.event.channel, question);
        }

        db.collection("standups").doc(standup.uid).set(standup);
    }
});

export const send_standups = functions.https.onRequest(async (request, response) => {
    const reportRefs = await db.collection("reports").get();
    console.log(`Got ${reportRefs.size} reports.`);
    const promises: Promise<void>[] = [];

    reportRefs.forEach(ref => {
        const report: Report = ref.data() as Report;
        promises.push(handleReport(report));
    });

    await Promise.all(promises);

    return response.status(200).send();
});

async function handleReport(report: Report) {
    console.log(`Handling report ${report.uid}`);
    const installation: Installation = (await db.collection("installations").doc(report.team_id).get()).data() as Installation;
    console.log(`Retrieved installation data for team ${installation.team_id}`);
    const dueMembers = await getDueMembers(report);
    console.log(`Got ${dueMembers.length} due members`);

    if (dueMembers.length <= 0) {
        return;
    }
    const batch = db.batch();

    for (const member of dueMembers) {
        const standup = createStandup(member, report);
        const standupRef = db.collection("standups").doc()

        // standupRef.set({ uid: standupRef.id });
        batch.set(standupRef, standup);
        batch.update(standupRef, { uid: standupRef.id });
    }

    batch.commit();

    const channelMap = await getDirectChannelIds(installation, dueMembers);

    for (const member of dueMembers) {
        sendSlackMessage(installation, channelMap[member.id], report.questions[0]);
    }
}

async function getDueMembers(report: Report) {
    const dueMembers: Member[] = [];

    for (const member of report.selectedMembers) {
        console.log(`member ${member.id} is due: ${isMemberDue(member, report.schedule)}`);
        console.log(`member ${member.id} has standup: ${await isStandupCreated(member, report)}`);
        if (isMemberDue(member, report.schedule) && !(await isStandupCreated(member, report))) {
            dueMembers.push(member);
        }
    }

    return dueMembers;
}

function isMemberDue(member: Member, schedule: Schedule) {
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);
    const day = memberTime.toLocaleString("en-us", { weekday: "long" }).toLowerCase();

    return schedule[day] === true &&
        (
            memberTime.getHours() > schedule.hour ||
            (
                memberTime.getHours() === schedule.hour &&
                memberTime.getMinutes() >= schedule.minute
            )
        );
}

async function isStandupCreated(member: Member, report: Report) {
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);
    const snapshot = await db.collection("standups")
        .where("memberId", "==", member.id)
        .where("reportUid", "==", report.uid)
        .where("date", "==", memberTime.toDateString()).get();

    return snapshot.size > 0;
}


/**
 * 
 * @param date current date
 * @param offset in seconds
 */
function convertToOtherTimezone(date: Date, offset: number) {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const newDate = new Date(utc + offset * 1000);
    return newDate;
}

function createStandup(member: Member, report: Report) {
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);

    const standup: Standup = {
        uid: "",
        questions: report.questions,
        answers: [],
        date: memberTime.toDateString(),
        finished: false,
        memberId: member.id,
        reportUid: report.uid,
    };

    return standup;
}

interface ConversationsListResponse {
    channels: Channel[]
}

interface Channel {
    id: string;
    user: string;
}

async function getDirectChannelIds(installation: Installation, dueMembers: Member[]) {
    const options = {
        uri: "https://slack.com/api/conversations.list",
        method: "GET",
        json: false,
        qs: {
            token: installation.bot.token,
            types: "im"
        }
    };
    console.log(`Requesting conversations.list for team ${installation.team_id}`);
    const result: ConversationsListResponse = JSON.parse(await rp(options));
    console.log(result);
    const channelMap = new Object();

    for (const member of dueMembers) {
        const channel = result.channels.find(c => c.user === member.id);
        if (channel === undefined) {
            const dc = await openDirectChannel(installation, member);
            channelMap[member.id] = dc.channel.id;
        } else {
            channelMap[member.id] = channel.id
        }
    }

    return channelMap;
}

async function openDirectChannel(installation: Installation, member: Member) {
    const options = {
        uri: "https://slack.com/api/im.open",
        method: "POST",
        json: false,
        qs: {
            token: installation.bot.token,
            user: member.id
        }
    };

    console.log(`Requesting new instant messaging channel with member ${member.id}`);

    const result = (await rp(options)) as { channel: { id: string } };
    console.log(result);

    return result;
}

function sendSlackMessage(installation: Installation, channelId: string, text: string) {
    const options = {
        uri: "https://slack.com/api/chat.postMessage",
        method: "POST",
        json: false,
        qs: {
            token: installation.bot.token,
            channel: channelId,
            text: text
        }
    };

    return rp(options);
}

export const oauth_redirect = functions.https.onRequest(async (request, response) => {
    if (request.method !== "GET") {
        console.error(`Got unsupported ${request.method} request. Expected GET.`);
        return response.status(405).send("Only GET requests are accepted");
    }

    if (!request.query && !request.query.code) {
        return response.status(401).send("Missing query attribute 'code'");
    }

    const userid = request.query.state;

    const options = {
        uri: "https://slack.com/api/oauth.access",
        method: "GET",
        json: true,
        qs: {
            code: request.query.code,
            client_id: functions.config().slack.id,
            client_secret: functions.config().slack.secret,
            redirect_uri: `https://us-central1-${process.env.GCLOUD_PROJECT}.cloudfunctions.net/oauth_redirect`
        }
    };

    const result = await rp(options);
    if (!result.ok) {
        console.error("The request was not ok: " + JSON.stringify(result));
        return response.header("Location", `https://${process.env.GCLOUD_PROJECT}.firebaseapp.com/install/failure`).send(302);
    }

    console.log(result);

    await admin.firestore().collection("installations").doc(result.team_id).set({
        access_token: result.access_token,
        creator_uid: userid,
        creator_slackid: result.user_id,
        team_id: result.team_id,
        webhook: {
            url: result.incoming_webhook.url,
            channel: result.incoming_webhook.channel_id
        },
        scope: result.scope,
        bot: {
            id: result.bot.bot_user_id,
            token: result.bot.bot_access_token
        }
    });

    return response.set("Content-Type", "text/html").send("<script>window.close();</script>")
});

