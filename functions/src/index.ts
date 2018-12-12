import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as admin from "firebase-admin";

admin.initializeApp();

export const oauth_redirect = functions.https.onRequest(async (request, response) => {
    if (request.method !== "GET") {
        console.error(`Got unsupported ${request.method} request. Expected GET.`);
		return response.status(405).send("Only GET requests are accepted");
    }

    if (!request.query && !request.query.code) {
        return response.status(401).send("Missing query attribute 'code'");
    }

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

    await admin.database().ref("installations").child(result.team_id).set({
        token: result.access_token,
        team: result.team_id,
        webhook: {
            url: result.incoming_webhook.url,
            channel: result.incoming_webhook.channel_id
        }
    });

    return response.header("Location", `https://${process.env.GCLOUD_PROJECT}.firebaseapp.com/setup`).send(302);
});
