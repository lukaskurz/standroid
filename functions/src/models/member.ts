export interface Member {
    color: string;
    deleted: boolean;
    id: string;
    is_bot: boolean;
    name: string;
    real_name: string;
    team_id: string;
    profile: {
        image_512: string,
        image_192: string,
        image_72: string,
        image_48: string
    };
    tz_offset: number;
}
