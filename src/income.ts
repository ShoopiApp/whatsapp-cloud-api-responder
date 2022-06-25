import { Sender } from "./outcome";

export type MiddlewareFunction = (sender: Sender, message: IncomeMessage, next?: Function) => void;

export type IncomeMessageType =
  | "text"
  | "image"
  // | 'button' have to check this kind of response
  | "location"
  | "interactive"
  | "template";

export interface IncomeButton {
  payload: string;
  text: string;
}

export interface IncomeImage {
  caption: string;
  mime_type: string;
  sha256: string;
  id: string;
}

export interface IncomeText {
  body: string;
}

export interface IncomeLocation {
  latitude: number;
  longitude: number;
}

export type InteractiveType = "button_reply" | "list_reply";

export interface IncomeListReply {
  id: string;
  title: string;
  description: string;
}

export interface IncomeButtonReply {
  id: string;
  title: string;
}

export interface IncomeInteractive {
  type: InteractiveType;
  list_reply?: IncomeListReply;
  button_reply?: IncomeButtonReply;
}

export interface IncomeMessage {
  from: string;
  id: string;
  timestamp: string;
  type: IncomeMessageType;
  button?: IncomeButton;
  image?: IncomeImage;
  text?: IncomeText;
  location?: IncomeLocation;
  interactive?: IncomeInteractive;
}
