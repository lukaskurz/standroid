import { Member } from './member';
import { Schedule } from './schedule';
import { Channel } from './channel';

export class Report {
    uid: string;
    creator_uid: string;
    team_id: string;
    name: string;
    schedule: Schedule;
    questions: string[];
    selectedMembers: Member[];
    channel: Channel;
}
