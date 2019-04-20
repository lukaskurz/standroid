export interface Standup {
  uid: string;
  memberId: string;
  reportUid: string;
  teamId: string;
  date: string;
  questions: { text: string; sent: boolean }[];
  answers: { text: string; id: string }[];
  finished: boolean;
  channelId: string;
}
