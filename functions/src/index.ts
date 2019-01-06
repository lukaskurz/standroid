import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as admin from "firebase-admin";
import { Schedule } from './schedule';
import { Member } from './member';
import { Standup } from './standup';
import { Report } from './report';
import { Installation } from './installation';

admin.initializeApp();
const db = admin.firestore();

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

export const slack_event = functions.https.onRequest((request, response) => {
    const body: SlackEvent = request.body;
    console.log(`Message body: ${JSON.stringify(request.body)}`);

    if (body.event.subtype !== undefined) {
        console.info("Bot message");
        response.status(200).send();
        return Promise.resolve();
    }
    console.info("User message");
    response.status(200).send();

    console.log("Fetching installation");
    return db.collection("installations").doc(body.team_id).get()
        .then(iRef => {
            const installation = iRef.data() as Installation;

            console.log("Fetching active standup");
            return db.collection("standups")
                .where("memberId", "==", body.event.user)
                .where("finished", "==", false).get()
                .then(sRefs => {
                    console.log(`Got ${sRefs.size} standups matched to message`);
                    if (sRefs.size > 0) {
                        const standup = sRefs.docs[0].data() as Standup;
                        standup.answers.push(body.event.text);
                        console.info("Handling standup now");
                        return handleStandup(standup, installation, body.event.channel);
                    }
                    return Promise.resolve(null);
                })
        })
        .catch(error => {
            console.error(error)
        })
});

function handleStandup(standup: Standup, installation: Installation, channel: string) {
    const promisePool: Promise<any>[] = [];

    if (standup.answers.length === standup.questions.length) {
        standup.finished = true;
        console.info("Standup is finished");

        console.log("Sending finished message");
        promisePool.push(
            new Promise((res, rej) => {
                sendSlackMessage(installation, channel, generateFinishedMessage()).catch(v => rej(v)).then(v => res());
            })
        );

        console.log("Fetching reports")
        promisePool.push(
            db.collection("reports").doc(standup.reportUid).get().then(ref => {
                const report = ref.data() as Report;
                return new Promise((res, rej) => {
                    console.log("Sending finished Standup")
                    sendFinishedStandup(
                        installation,
                        report,
                        report.selectedMembers.find(m => m.id === standup.memberId),
                        standup
                    ).catch(v => rej(v)).then(v => res());
                })
            })
        );

        // handleAllReports(installation.team_id); // Check for open standups
    } else {
        const question = standup.questions[standup.answers.length];
        promisePool.push(
            new Promise((res, rej) => {
                sendSlackMessage(installation, channel, question).catch(v => rej(v)).then(v => res());
            })
        );
    }

    promisePool.push(db.collection("standups").doc(standup.uid).set(standup));

    return Promise.all(promisePool);
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

export const send_standups = functions.https.onRequest(async (request, response) => {
    // If request not from cloud scheduler
    if (
        JSON.parse(request.body).secret === undefined
        || JSON.parse(request.body).secret !== functions.config().cloudscheduler.secret
    ) {
        return response.status(401).send();
    }

    await handleAllReports();

    return response.status(200).send();
});

async function handleAllReports(team_id?: string) {
    // tslint:disable-next-line:triple-equals
    const reportRefs = team_id === undefined ?
        await db.collection("reports").get()
        : await db.collection("reports").where("team_id", "==", team_id).get();
    console.log(`Got ${reportRefs.size} reports.`);
    const promises: Promise<void>[] = [];

    reportRefs.forEach(ref => {
        const report: Report = ref.data() as Report;
        promises.push(handleReport(report));
    });

    return Promise.all(promises);
}

async function handleReport(report: Report) {
    const installation: Installation = (await db.collection("installations").doc(report.team_id).get()).data() as Installation;
    const dueMembers = await getDueMembers(report);

    if (dueMembers.length <= 0) {
        return;
    }
    const batch = db.batch();

    for (const member of dueMembers) {
        const standup = createStandup(member, report);
        const standupRef = db.collection("standups").doc()

        batch.set(standupRef, standup);
        batch.update(standupRef, { uid: standupRef.id });
    }

    batch.commit();

    const channelMap = await getDirectChannelIds(installation, dueMembers);

    const possibilities = 2;
    const messageRandom = Math.floor(Math.random() * possibilities);

    for (const member of dueMembers) {
        let greeting: string;

        switch (messageRandom) {
            case 0: greeting = `:bangbang: *ATTENTION, Private <@${member.id}>* :bangbang: Time to answer some questions for your ${report.name}.`;
                break;
            case 1: greeting = `:eyes: *EYES FRONT, Private <@${member.id}>* :boom: Report in for your ${report.name}.`
                break;
        }

        await sendSlackMessage(installation, channelMap[member.id], greeting);
        sendSlackMessage(installation, channelMap[member.id], report.questions[0]);
    }
}

async function getDueMembers(report: Report) {
    const dueMembers: Member[] = [];

    for (const member of report.selectedMembers) {
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

function sendFinishedStandup(installation: Installation, report: Report, member: Member, standup: Standup) {
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
            channel: report.channel.id,
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

