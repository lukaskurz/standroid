import { Member } from './member';
import { Channel } from './channel';

export interface SlackUserListResponse {
    ok: boolean;
    members: Member[];
    response_metadata: {
        next_cursor?: string;
    };
}

export interface SlackChannelListResponse {
    ok: boolean;
    channels: Channel[];
    response_metadata: {
        next_cursor?: string;
    };
}
