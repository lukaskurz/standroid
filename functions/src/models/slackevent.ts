interface SlackEvent {
    team_id: string;
    event: {
        type: string,
        subtype?: string,
        text: string,
        user: string,
        channel: string,
        client_msg_id: string
    }
}
