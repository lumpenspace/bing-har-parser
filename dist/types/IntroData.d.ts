interface IntroData {
    source: string;
    optionSets: string[];
    allowedMessageTypes: MessageType[];
    sliceIds: string[];
    verbosity: "verbose" | "normal" | "quiet";
    isStartOfSession: true;
    message: {
        locale: string;
        market: string;
        region: string;
        location: string;
        locationHints: LocationHint[];
        author: Author.User;
        inputMethod: InputMethod;
        text: string;
        timestamp: string;
        messageType: MessageType;
    };
    requestId: string;
    conversationSignature: string;
    participant: {
        id: string;
    };
    conversationId: string;
}
export interface ParsedIntroData extends IntroData {
    message: IntroData["message"] & {
        location: "#redacted";
        locationHints: "#redacted";
    };
}
export {};
