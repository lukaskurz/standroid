import { Member } from './member';

export interface SlackUserListResponse {
    ok: boolean;
    members: Member[];
    response_metadata: {
        next_cursor?: string;
    };
}
