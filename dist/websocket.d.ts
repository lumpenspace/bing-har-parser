import type { ParsedWebsocketEntry, WebSocketEntry } from './types';
declare const parseWebSocket: (wsEntries: WebSocketEntry[]) => ParsedWebsocketEntry[];
declare const parseWebSocketDataProp: (data: string) => any[];
export { parseWebSocket, parseWebSocketDataProp };
