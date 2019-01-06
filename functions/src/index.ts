import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as admin from "firebase-admin";
import { Schedule } from './schedule';
import { Member } from './member';
import { Standup } from './standup';
import { Report } from './report';
import { Installation } from './installation';
import { Message } from 'firebase-functions/lib/providers/pubsub';
import { SlackMessage } from './slackmessage';
import field from './firestore-field-filter';
import { stringify } from 'querystring';

admin.initializeApp();
const db = admin.firestore();

interface SlackEvent {
    team_id: string;
    event: {
        type: string,
        subtype?: string,
        text: string,
        user: string,
        channel: string,
        client_msg_id: string
    }
}

export const slack_event = functions.https.onRequest(async (request, response) => {
    const body: SlackEvent = request.body;
    console.log(`Message body: ${JSON.stringify(request.body)}`);

    if (body.event.subtype !== undefined) {
        console.info("Bot message");
        response.status(200).send();
    } else {
        console.info("User message");
        await db.collection("messages").doc(body.event.client_msg_id).set(body);
        response.status(200).send();
    }
});

export const standup_finished = functions.firestore.document("/standups/{standupId}").onUpdate(
    field("finished", "CHANGED", async (change, context) => {
        const standup = change.after.data() as Standup;
        if (standup.finished === true) {
            const snapshot = await db.collection("installations").doc(standup.teamId).get();
            const installation = snapshot.data() as Installation;

            await sendFinishedMessage(standup, installation);
            await postFinishedStandup(standup, installation);
        }
    })
)

async function postFinishedStandup(standup: Standup, installation?: Installation) {
    if (installation === undefined) {
        const installationSnapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = installationSnapshot.data() as Installation;
    }

    const snapshot = await db.collection("reports").doc(standup.reportUid).get()
    const report = snapshot.data() as Report;
    const member = report.selectedMembers.find(m => m.id === standup.memberId);

    const options = {
        uri: "https://slack.com/api/chat.postMessage",
        method: "POST",
        json: true,
        auth: {
            "bearer": installation.bot.token
        },
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            channel: report.channel,
            attachments: [
                {
                    pretext: `:bangbang: *AT EASE* :bangbang: Another standup is finished.`,
                    author_name: `${member.name} ~ ${member.real_name}`,
                    author_icon: member.profile.image_72,
                    color: "#1D5100",
                    title: report.name,
                    fields: standup.questions.map((value, index) => {
                        return {
                            title: value,
                            value: standup.answers[index],
                            short: false
                        };
                    }),
                    footer: new Date().toTimeString()
                }
            ]
        },
    };

    return rp(options);
}

async function sendFinishedMessage(standup: Standup, installation?: Installation) {
    const text = generateFinishedMessage();
    if (installation === undefined) {
        const snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }
    return await sendSlackMessage(installation, standup.channelId, text);
}


function generateFinishedMessage() {
    const possibilities = 3;
    const messageRandom = Math.floor(Math.random() * possibilities);
    let finishedMessage: string;
    switch (messageRandom) {
        case 0: finishedMessage = `Alright maggot, that's all I need. *DISMISSED*`
            break;
        case 1: finishedMessage = `That's everything I needed Micky Mouse. *FALL OUT*`
            break;
        case 2: finishedMessage = `Atleast you're good for something. What are you waiting for, princess? *DISMISSED*`
            break;
    }
    return finishedMessage;
}

export const answers_changed = functions.firestore.document("/standups/{standupId}").onUpdate(
    field("answers", "CHANGED", async (change, context) => {
        const standup = change.after.data() as Standup;

        // Finished
        if (standup.answers.length === standup.questions.length) {
            standup.finished = true;
            await db.collection("standups").doc(standup.uid).update({ finished: standup.finished });
        } else { // Next Question
            await sendNextQuestion(standup);
        }
    })
)

async function sendNextQuestion(standup: Standup, installation?: Installation) {
    if (installation === undefined) {
        const snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }
    const question = standup.questions[standup.answers.length];
    return await sendSlackMessage(installation, standup.channelId, question);
}

export const new_message = functions.firestore.document("/messages/{messageId}").onCreate(
    async (snapshot, context) => {
        const message = snapshot.data() as SlackMessage;
        const standupSnapshot = await db.collection("standups")
            .where("teamId", "==", message.team_id)
            .where("memberId", "==", message.event.user)
            .where("finished", "==", false).get();

        if (standupSnapshot.size > 0) {
            const standup = standupSnapshot.docs[0].data() as Standup;
            standup.answers.push(message.event.text);
            await db.collection("standups").doc(standup.uid).update({ answers: standup.answers });
        }
    }
)

export const new_standup = functions.firestore.document("/standups/{standupId}").onCreate(
    async (snapshot, context) => {
        const standup = snapshot.data() as Standup;
        const installSnapshot = await db.collection("installations").doc(standup.teamId).get();
        const installation = installSnapshot.data() as Installation;

        await sendGreeting(standup, installation);
        await sendNextQuestion(standup, installation);
    }
)

async function sendGreeting(standup: Standup, installation?: Installation) {
    let snapshot = await db.collection("reports").doc(standup.reportUid).get();
    const report = snapshot.data() as Report;
    const member = report.selectedMembers.find(m => m.id === standup.memberId);

    const text = generateGreetingMessage(report, member);
    if (installation === undefined) {
        snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }
    return await sendSlackMessage(installation, standup.channelId, text);
}

function generateGreetingMessage(report: Report, member: Member) {
    const possibilities = 2;
    const messageRandom = Math.floor(Math.random() * possibilities);
    let greeting: string;

    switch (messageRandom) {
        case 0: greeting = `:bangbang: *ATTENTION, Private <@${member.id}>* :bangbang: Time to answer some questions for your ${report.name}.`;
            break;
        case 1: greeting = `:eyes: *EYES FRONT, Private <@${member.id}>* :boom: Report in for your ${report.name}.`
            break;
    }

    return greeting;
}

export const send_standups = functions.https.onRequest(async (request, response) => {
    // If request not from cloud scheduler
    if (
        JSON.parse(request.body).secret === undefined
        || JSON.parse(request.body).secret !== functions.config().cloudscheduler.secret
    ) {
        response.status(401).send();
    }

    await checkAllReports();

    response.status(200).send();
});

async function checkAllReports() {
    const snapshot = await db.collection("reports").get();
    const reports = snapshot.docs.map(doc => doc.data() as Report);

    const pool: Promise<{} | void>[] = [];

    reports.forEach(report => {
        pool.push(checkReport(report));
    });

    await Promise.all(pool);
}

async function checkReport(report: Report) {
    const snapshot = await db.collection("installations").doc(report.team_id).get();
    const installation: Installation = snapshot.data() as Installation;
    const dueMembers = await getDueMembers(report);

    if (dueMembers.length <= 0) {
        return Promise.resolve();
    }

    const batch = db.batch();
    const channelMap = await getDirectChannelIds(installation, dueMembers);

    for (const member of dueMembers) {
        const query = await db.collection("standups")
            .where("reportUid", "==", report.uid)
            .where("memberId", "==", member.id)
            .where("finished", "==", false).get();
        const oldStandups = query.docs;
        oldStandups.forEach(old => {
            batch.update(old.ref, { finished: true });
        })

        const standup = createStandup(member, report, channelMap[member.id]);
        const standupRef = db.collection("standups").doc()

        batch.set(standupRef, standup);
        batch.update(standupRef, { uid: standupRef.id });
    }

    return batch.commit();
}

async function getDueMembers(report: Report) {
    const dueMembers: Member[] = [];

    const pool: Promise<void>[] = [];

    for (const member of report.selectedMembers) {
        if (isMemberDue(member, report.schedule)) {
            const promise = isStandupCreated(member, report).then(created => {
                if (!created) {
                    dueMembers.push(member);
                }
            })
            pool.push(promise);
        }
    }

    await Promise.all(pool);

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
        .where("date", "==", memberTime.toDateString())
        .where("finished", "==", false).get();

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

function createStandup(member: Member, report: Report, imChannelId: string) {
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);

    const standup: Standup = {
        uid: "",
        questions: report.questions,
        answers: [],
        date: memberTime.toDateString(),
        finished: false,
        memberId: member.id,
        reportUid: report.uid,
        teamId: report.team_id,
        channelId: imChannelId
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
        json: true,
        body: {
            channel: channelId,
            text: text
        },
        headers: {
            "Content-Type": "application/json"
        },
        auth: {
            "bearer": installation.bot.token
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

