import { Har, Entry } from 'har-format';
import { WsMessage } from './WebSocket';

export type EntryWithWs = Entry & {
  _resourceType: 'websocket';
  _webSocketMessages: WsMessage[];
};

export type WsEntry = Entry | EntryWithWs;

export type WsHar = Har & {
  log: {
    entries: WsEntry[];
  };
};
