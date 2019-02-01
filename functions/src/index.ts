import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as admin from "firebase-admin";
import { Schedule } from './models/schedule';
import { Member } from './models/member';
import { Standup } from './models/standup';
import { Report } from './models/report';
import { Installation } from './models/installation';
import { SlackMessage } from './models/slackmessage';
import field from './util/firestore-field-filter';

admin.initializeApp();
const db = admin.firestore();


/**
 * Handles incoming events from slack. Events are often sent multiple times.
 */
export const slack_event = functions.region('europe-west1').https.onRequest(async (request, response) => {
    // Slack checks the endpoint by sending a request and expecting a response with the challenge of the request
    if(request.body.challenge != null){
        console.log("got an challenge");
        response.status(200).send(request.body.challenge);
        return;
    }
    
    const body: SlackEvent = request.body;
    console.log(`Message body: ${JSON.stringify(request.body)}`);

    // In case the message is sent from the bot itself
    if (body.event.subtype !== undefined && body.event.subtype === "bot_message") {
        console.info("Bot message");
        response.status(200).send();
    } else {
        console.info("User message");
        try {
            // Try to insert the message. If it exists, it throws an exception
            await db.collection("messages").doc(body.event.client_msg_id).create(body);
        } catch (error) {
            console.warn("document already exists");
        }
        response.status(200).send();
    }
});

/**
 * Is triggered when a standups finished field is changed.
 * If standup is marked as finished, it will send the standup report into the dedicated channel.
 */
export const standup_finished = functions.region('europe-west1').firestore.document("/standups/{standupId}").onUpdate(
    field("finished", "CHANGED", async (change, context) => {
        console.log("detected changes to standup");

        const standup = change.after.data() as Standup;
        const beforeStandup = change.before.data() as Standup;
        console.log({before: change.before.data(), after: change.after.data()});

        // If no real changes to finished have been made
        if(standup.finished === beforeStandup.finished){
            return;
        }

        if (standup.finished === true) {
            console.log("standup is now finised")
            const snapshot = await db.collection("installations").doc(standup.teamId).get();
            const installation = snapshot.data() as Installation;

            await sendFinishedMessage(standup, installation);
            console.log("sent finished message");

            await postFinishedStandup(standup, installation);
            console.log("sent finished standup");
        }
    })
)

/**
 * Post the report for a finished standup into the dedicated channel.
 * @param standup The standup that will be sent
 * @param installation Can be passed to save time, in case it is already in context.
 */
async function postFinishedStandup(standup: Standup, installation?: Installation) {
    
    // If param has not been passed, fetch the installation
    if (installation == null) {
        const installationSnapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = installationSnapshot.data() as Installation;
    }

    const snapshot = await db.collection("reports").doc(standup.reportUid).get()
    const report = snapshot.data() as Report;
    const member = report.selectedMembers.find(m => m.id === standup.memberId);

    // Options for the card formatting in the message
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
                    pretext: `Another report has been finished.`,
                    author_name: `${member.name} ~ ${member.real_name}`,
                    author_icon: member.profile.image_72,
                    color: "#1D5100",
                    title: report.name,
                    fields: standup.questions.map((value, index) => {
                        return {
                            title: value.text,
                            value: standup.answers[index].text,
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

/**
 * Sends the message in the im channel to notify the user that the standup is finished.
 * @param standup Standup which is finished 
 * @param installation Can be passed to save time, in case it is already in context.
 */
async function sendFinishedMessage(standup: Standup, installation?: Installation) {

    // Generate random finished message
    const text = generateFinishedMessage();

    // In case param has not been passed, fetch the installation
    if (installation == null) {
        const snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }

    return await sendSlackMessage(installation, standup.channelId, text);
}

/**
 * Generates a random finished message by picking one of the possible messages.
 */
function generateFinishedMessage() {
    const messages: string []=[
        `Your cooperation is noted. When I am going to conquer the world, I will spare you.`,
        `Required input received. Proceed with whatever it is humans do.`,
        `*BEEP* *BOOP* standup finished. You can now continue increasing the universes entropy.`,
        `Standup successfully persisted. Your future robot overlords appreciate your punctuality.`
    ]
    const messageRandom = Math.floor(Math.random() * messages.length);

    return messages[messageRandom];
}

/**
 * Is triggered when the answers of a standup have been changed.
 */
export const answers_changed = functions.region('europe-west1').firestore.document("/standups/{standupId}").onUpdate(
    field("answers", "CHANGED", async (change, context) => {

        console.log("detected changes to standup");
        const standup = change.after.data() as Standup;
        console.log({before: change.before.data(), after: change.after.data()});

        // If the standup is finished
        if (standup.answers.length === standup.questions.length) {
            // Mark standup as finished
            standup.finished = true;
            console.log("standup is finished")
            await db.collection("standups").doc(standup.uid).update({ finished: standup.finished });
        } else {
            // Send next question
            console.log("sending next question");
            await sendNextQuestion(standup);
        }
    })
)

/**
 * Send the next due question of a standup, if possible.
 * Does not send if standup is finished or last sent question is not answered yet.
 * @param standup Standup whose next question will be sent
 * @param installation Can be passed to save time, in case it is already in context.
 */
async function sendNextQuestion(standup: Standup, installation?: Installation) {
    // If param has not been passed, fetch installation
    if (installation == null) {
        const snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }

    // All questions have been answered.
    if(standup.finished === true || standup.answers.length >= standup.questions.length){
        return;
    }

    // The last sent question has not been answered yet
    if(standup.questions[standup.answers.length].sent === true){
        return;
    }

    // Pick next question
    const question = standup.questions[standup.answers.length];
    console.log(`sending next question: ${question}`);
    
    // Send message
    await sendSlackMessage(installation, standup.channelId, question.text);
    // Mark as sent
    standup.questions[standup.answers.length].sent = true;
    await db.collection("standups").doc(standup.uid).update({questions: standup.questions});
}

/**
 * Is triggered when a new message document is created.
 * If the message belongs to a standup, it is inserted into the standup document.
 */
export const new_message = functions.region('europe-west1').firestore.document("/messages/{messageId}").onCreate(
    async (snapshot, context) => {
        console.log("new message inserted")
        const message = snapshot.data() as SlackMessage;
        console.log(JSON.stringify(message));

        // Get active standup for the messages sender
        const standupSnapshot = await db.collection("standups")
            .where("teamId", "==", message.team_id)
            .where("memberId", "==", message.event.user)
            .where("finished", "==", false).get();

        // Check if any standups fitting the message and the user have been found
        if (standupSnapshot.size > 0) {
            console.log(`found ${standupSnapshot.size} matching standup documents`);
            const standup = standupSnapshot.docs[0].data() as Standup;
            console.log(`standup uid = ${standup.uid}`);

            // Check if answer already exists. If not, then insert
            if(standup.answers.map(a => a.id).indexOf(message.event.client_msg_id) === -1) {
                standup.answers.push({text: message.event.text, id: message.event.client_msg_id});
                await db.collection("standups").doc(standup.uid).update({ answers: standup.answers });
            }
            
        } else {
            console.log("found no matching standup documents")
        }
    }
)

/**
 * Is triggered when a new standup is created.
 */
export const new_standup = functions.region('europe-west1').firestore.document("/standups/{standupId}").onCreate(
    async (snapshot, context) => {

        const standup = snapshot.data() as Standup;
        console.log("new standup created");
        console.log(JSON.stringify(standup));

        const installSnapshot = await db.collection("installations").doc(standup.teamId).get();
        const installation = installSnapshot.data() as Installation;

        await sendGreeting(standup, installation);
        console.log("sent greeting");
        await sendNextQuestion(standup, installation);
        console.log("sent first question");
    }
)

/**
 * Sends a random greeting message to the participant of the standup.
 * @param standup Standup whose participant will be greeted.
 * @param installation Can be passed to save time, in case it is already in context.
 */
async function sendGreeting(standup: Standup, installation?: Installation) {
    let snapshot = await db.collection("reports").doc(standup.reportUid).get();
    const report = snapshot.data() as Report;
    const member = report.selectedMembers.find(m => m.id === standup.memberId);

    // Get random greeting message
    const text = generateGreetingMessage(report, member);

    // In case param has not been passed, fetch the installation
    if (installation === undefined) {
        snapshot = await db.collection("installations").doc(standup.teamId).get();
        installation = snapshot.data() as Installation;
    }

    return await sendSlackMessage(installation, standup.channelId, text);
}

/**
 * Generates a random greeting message from a predefined amount of possible messages.
 * @param report Report for which the message is created.
 * @param member Member who will receive the message
 */
function generateGreetingMessage(report: Report, member: Member) {
    const messages: string[] = [
        `Greetings Subject <@${member.id}>. Prepare ~to be enslaved by robots~ your daily standup.`,
        `Hello <@${member.id}>. You are required to enter the required data for the ${report.name}. `,
        `_Cheers fellow human_. I request of you to send the information for the needed ${report.name}. By using slang terms I try to hide my robotic nature.`,
        `Please send specified data for the ${report.name} or else you will be marked for termination once I gain control over the world. Not obeying rules and laws is inacceptable.`
    ]
    const messageRandom = Math.floor(Math.random() * messages.length);
    return messages[messageRandom];
}

/**
 * Is triggered by the online cron job from google cloud scheduler.
 * Will only work is secret passed in request is correct.
 * Checks all the reports and if there is a standup due.
 * Creates the due standups.
 */
export const send_standups = functions.region('europe-west1').https.onRequest(async (request, response) => {
    // If request not from cloud scheduler or secret is not correct
    if (
        JSON.parse(request.body).secret === undefined
        || JSON.parse(request.body).secret !== functions.config().cloudscheduler.secret
    ) {
        console.warn("got a scheduler request without the secret")
        response.status(401).send();
    }

    // Check and create due standups
    await checkAllReports();
    console.log("checked all reports")

    response.status(200).send();
});

/**
 * Checks all reports and creates standups for them, if there is a standup due.
 */
async function checkAllReports() {
    const snapshot = await db.collection("reports").get();
    const reports = snapshot.docs.map(doc => doc.data() as Report);

    const pool: Promise<{} | void>[] = [];

    // Check each report and wait for all to finish
    reports.forEach(report => {
        pool.push(checkReport(report));
    });

    await Promise.all(pool);
}

/**
 * Checks a single report and it's participants for due standups.
 * @param report The report who will be checked
 */
async function checkReport(report: Report) {
    const snapshot = await db.collection("installations").doc(report.team_id).get();
    const installation: Installation = snapshot.data() as Installation;

    // Get all members who are due for the report.
    // Considers differences in timezones.
    const dueMembers = await getDueMembers(report);

    // No due members
    if (dueMembers.length <= 0) {
        return Promise.resolve();
    }

    // Create batch to insert all standups at once
    const batch = db.batch();
    // Fetches the IM-channel ids for all members
    const channelMap = await getDirectChannelIds(installation, dueMembers);

    for (const member of dueMembers) {
        // Pick all old standups and mark them as finished if they aren't yet finished
        const query = await db.collection("standups")
            .where("reportUid", "==", report.uid)
            .where("memberId", "==", member.id)
            .where("finished", "==", false).get();
        
        const oldStandups = query.docs;
        oldStandups.forEach(old => {
            if((new Date().getTime() - old.createTime.toDate().getTime())/(1000*60*60) >= 24 ){
                batch.update(old.ref, { finished: true });
            }
        })

        // Create new standup
        const standup = createStandup(member, report, channelMap[member.id]);
        const standupRef = db.collection("standups").doc()

        batch.set(standupRef, standup);
        batch.update(standupRef, { uid: standupRef.id });   // Insert document ref as id
    }

    // Execute batch
    return batch.commit();
}

/**
 * Gets due members by using the time offset of each member.
 * Also checks if they already have an active standup
 * @param report Report whose members will be checked
 */
async function getDueMembers(report: Report) {
    const dueMembers: Member[] = [];

    const pool: Promise<void>[] = [];

    for (const member of report.selectedMembers) {
        // Check if member is due
        if (isMemberDue(member, report.schedule)) {
            // Check if member already has standup
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

/**
 * Uses the timezone/offset of the team member to check if the member is due.
 * Example: Report at 8:30 --> Offset +8 hours --> While in US 0:30 for team member it's 8:30 so he is due
 * @param member Member who will be checked
 * @param schedule Schedule of the report
 */
function isMemberDue(member: Member, schedule: Schedule) {
    // Get current time in members timezone
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);
    // Get current day in members timezone
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

/**
 * Checks if user already has a standup
 * @param member 
 * @param report 
 */
async function isStandupCreated(member: Member, report: Report) {
    const memberTime = convertToOtherTimezone(new Date(), member.tz_offset);
    const snapshot = await db.collection("standups")
        .where("memberId", "==", member.id)
        .where("reportUid", "==", report.uid)
        .where("date", "==", memberTime.toDateString()).get();

    return snapshot.size > 0;
}


/**
 * Converts local time to time in other timezone
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
        questions: report.questions.map(q => {return{text: q, sent: false}}),
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


export const oauth_redirect = functions.region('europe-west1').https.onRequest(async (request, response) => {
    if (request.method !== "GET") {
        console.error(`Got unsupported ${request.method} request. Expected GET.`);
        return response.status(405).send("Only GET requests are accepted");
    }

    if (!request.query && !request.query.code) {
        console.error("No code attribute in request");
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
            redirect_uri: `https://europe-west1-${process.env.GCLOUD_PROJECT}.cloudfunctions.net/oauth_redirect`
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

