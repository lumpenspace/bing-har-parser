export * from './feedbackTypes';
export * from './IntroData';
export interface WebSocketEntry {
    type?: string;
    time: number;
    opcode: number;
    data: string;
}
export type ParsedWebsocketEntry = [
    time: number,
    type: string,
    content?: any
];
export interface ThrottlingData {
    maxNumUserMessagesInConversation: number;
    numUserMessagesInConversation: number;
}
export interface ParsedAll extends WebSocketEntry {
    direction: string;
    data: any;
}
export interface WebSocketUpdate {
    time: number;
    update: any;
}
export type ParsedWebsocket = {
    parsedAll: ParsedAll[];
    parsedUpdates: ParsedUpdates;
    parsedMessages: ParsedMessages;
};
export type ParsedWebsocketDataProp = {
    update: any;
    parsedData: any[];
    updateMessages: any[];
};
export type ParsedUpdate = {
    [key: number]: any;
};
export type ParsedMessages = {
    [key: number]: any;
};
export type ParsedUpdates = {
    [time: number]: ParsedUpdate;
};
