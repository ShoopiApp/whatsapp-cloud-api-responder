import * as Outcome from './outcome';
export default class WhatsappMessage {
    private url;
    private type;
    private to;
    private message;
    constructor(phone_number_id: string, token: string);
    sendMessage(to: string, message: Outcome.OutcomeMessageTypes): void;
    private send;
}
