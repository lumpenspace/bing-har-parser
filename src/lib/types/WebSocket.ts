import { WsEntry } from "./Har";

export interface WsMessage {
  type?: string;
  time: number;
  opcode: number;
  data: string;
}

export type ParsedWsMessage = {
  time: number,
  type: string,
  content?: any
}

export interface ConversationMetadata {
  name: string;
  fromTime: Date;
  toTime: Date;
  numExchanges: number;
} 

export interface Exchange {
  index: number;
  time: number;
  messages: ParsedWsMessage[];
}

export interface Conversation extends ConversationMetadata {
  exchanges: Exchange[];
  log: WsEntry[];
}

export interface ThrottlingData {
  maxNumUserMessagesInConversation: number,
  numUserMessagesInConversation: number,
}
