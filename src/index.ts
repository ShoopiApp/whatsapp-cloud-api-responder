import axios from 'axios';
import { ENDPOINT } from './constants';
import * as Outcome from './outcome';

export default class WhatsappMessage {
  private url: string;
  private type: Outcome.OutcomeMessageType;
  private to: string;
  private message: Outcome.Outcometext | Outcome.Outcometemplate | Outcome.Outcomeinteractive;

  constructor(phone_number_id: string, token: string) {
    this.url = ENDPOINT.replace('$phone_number_id', phone_number_id).replace('$token', token);
  }

  sendMessage(to: string, message: Outcome.OutcomeMessageTypes) {
    this.to = to;
    this.type = message.type;
    this.message = message[message.type];
    this.send();
  }

  private async send() {
    const data = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: this.to,
      type: this.type,
      [this.type]: this.message,
    };
    try {
      const res = await axios({
        method: 'POST',
        url: this.url,
        data: data,
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('🚀 ~ file: index.ts ~ line 38 ~ WhatsappMessage ~ send ~ res', res);
    } catch (error) {
      console.log('🚀 ~ file: index.ts ~ line 124 ~ WhatsappMessage ~ send ~ error', error.response.data);
    }
  }
}
