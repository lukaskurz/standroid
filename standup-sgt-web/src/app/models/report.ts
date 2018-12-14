import { Member } from './member';

export class Report {
    creator_uid: string;
    team_id: string;
    name: string;
    schedule: {
        monday: boolean,
        tuesday: boolean,
        wednesday: boolean,
        thursday: boolean,
        friday: boolean,
        saturday: boolean,
        sunday: boolean,
        hour: number,
        minute: number,
    };
    questions: string[];
    selectedMembers: Member[];
}
