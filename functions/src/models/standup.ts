export interface Standup {
	uid: string;
	memberId: string;
	reportUid: string;
	teamId: string;
	date: string;
	questions: string[];
	answers: string[];
	finished: boolean;
	channelId: string;
}