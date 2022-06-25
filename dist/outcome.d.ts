export declare type OutcomeMessageTypes = OutcomeText | OutcomeTextTemplate | OutcomeInteractive;
export declare type OutcomeMessageType = "template" | "text" | "interactive";
export interface Sender {
    display_phone_number: string;
    phone_number_id: string;
}
export interface OutcomeComponentParams {
    type: "text" | "currency" | "date_time" | "image" | "document";
    text?: string;
}
export interface OutcomeComponent {
    type: "header" | "body";
    parameters: Array<OutcomeComponentParams>;
}
export interface OutcomeButton {
    type: string;
    reply: {
        id: string;
        title: string;
    };
}
export interface OutcomeRows {
    id: string;
    title: string;
    description: string;
}
export interface OutcomeSections {
    title: string;
    rows: Array<OutcomeRows>;
}
export interface Outcometemplate {
    name: string;
    language: {
        code: string;
    };
    components?: Array<OutcomeComponent>;
}
export interface Outcomeinteractive {
    type: "list" | "button";
    header?: {
        type: string;
        text: string;
    };
    body: {
        text: string;
    };
    action: {
        button?: string;
        buttons?: Array<OutcomeButton>;
        sections?: Array<OutcomeSections>;
    };
}
export interface Outcometext {
    preview_url?: boolean;
    body: string;
}
export interface OutcomeText {
    type: OutcomeMessageType;
    text: Outcometext;
}
export interface OutcomeTextTemplate {
    type: OutcomeMessageType;
    template?: Outcometemplate;
}
export interface OutcomeInteractive {
    type: OutcomeMessageType;
    interactive?: Outcomeinteractive;
}
