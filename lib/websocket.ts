import type  { ParsedIntroData, ParsedWebsocketEntry, WebSocketEntry } from './types';
import { getMessageMapper } from './messageMapper';


const getIntroData = (data: any) => {
  const introData = data.arguments[0];
  return introData as ParsedIntroData;
}

const parseWebSocket = (wsEntries: WebSocketEntry[]):ParsedWebsocketEntry[] => {
  const parsedEntries: ParsedWebsocketEntry[] = [];

  const mapMessage = getMessageMapper();
  for (const { time, type: direction, data } of wsEntries) {
    const push = (type: string, content?: any) => parsedEntries.push([ time, type, content ])
    const parsedData = parseWebSocketDataProp(data);
    for (const item of parsedData) {
      if (!item.type) continue;
      switch (item.type) {
        case 6:
          push(direction === "send" ? "ping": "pong");
          break;
        case 4:
          push("intro", getIntroData(item));
          break;
        case 1:
          push(...mapMessage(item));
          break;
      }
        
    }
  }
  return parsedEntries;
}

const parseWebSocketDataProp = (data: string):any[] => {
  let parsedData:any[] = [];

  try {
    const dataStrings = data.split("\u001e");
    for (const dataString of dataStrings) {
      if (dataString.length === 0) {
        continue;
      }
      const parsedDataString = JSON.parse(dataString);
      parsedData.push(parsedDataString);
    }
  } catch (error) {
    console.error(`Error parsing data data: ${error}`);
  }
  return parsedData;
}

export { parseWebSocket, parseWebSocketDataProp };
