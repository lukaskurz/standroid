export interface Standup {
	uid: string;
	memberId: string;
	reportUid: string;
	date: string;
	questions: string[];
	answers: string[];
	finished: boolean;
}