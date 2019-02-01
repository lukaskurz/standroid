export interface SlackMessage {
	api_app_id: string;
	event: {
		channel: string;
		channel_type: string;
		client_msg_id: string;
		event_ts: string;
		text: string;
		ts: string;
		type: string;
		user: string;
	}
	event_id: string;
	event_time: number;
	team_id: string;
	token: string;
	type: string;
}
