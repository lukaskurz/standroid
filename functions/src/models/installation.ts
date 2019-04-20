export interface Installation {
	access_token: string;
	bot: {
		id: string,
		token: string
	};
	creator_slackid: string;
	creator_uid: string;
	scope: string;
	team_id: string;
	webhook: {
		channel: string,
		url: string
	};
}
