import type  { Conversation, Exchange, ParsedIntroData, ParsedWsMessage, WsEntry, WsHar, WsMessage } from './types';
import { getMessageMapper } from './messageMapper';
import { assert } from 'console';

const getIntroData = (data: any) => {
  const introData = data.arguments[0];
  return introData as ParsedIntroData;
}

const firstAndLast = (exchanges: Exchange[]) => {
  const lastExchange = exchanges[exchanges.length - 1];
  return {
    first: exchanges[0].messages[0],
    last: lastExchange.messages[lastExchange.messages.length - 1],
  }
}

const mapExchanges = (har: WsHar):Conversation => {
  const entries = har.log.entries as WsEntry[];
  const exchanges = entries
    .filter((entry: any) => (entry._resourceType === 'websocket'))
    .map(({ _webSocketMessages, ...entry }, i) => 
    parseExchange(_webSocketMessages as WsMessage[], i));

  const { first, last } = firstAndLast(exchanges);
  return {
    exchanges,
    name: (new Date(exchanges[0].messages[0].time)).toUTCString(),
    fromTime: new Date(first.time),
    toTime: new Date(last.time),
    numExchanges: exchanges.length,
    log: entries,
  }

}

const parseExchange = (messages: WsMessage[], index: number):Exchange => {
  try {
    assert(messages.length)
  } catch (error) {
    console.error(`Error parsing exchange: ${error}`);
  }
  const parsedMessages: ParsedWsMessage[] = [];
  const mapMessage = getMessageMapper();
  const time = messages[0].time;

  for (const { time, data } of messages) {
    const push = (type: string, content?: any) => parsedMessages.push({ time, type, content })
    const parsedData = parseExchangeDataProp(data);
    for (const item of parsedData) {
      if (!item.type) continue;
      switch (item.type) {
        case 4:
          push("UserInfo", getIntroData(item));
          break;
        case 2:
          push("Summary", item);
          break;
        case 1:
          push(...mapMessage(item));
          break;
      }
    }
  }
  return {
    index: 0,
    time,
    messages: parsedMessages,
  };
}

const parseExchangeDataProp = (data: string):any[] => {
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

export { parseExchange, parseExchangeDataProp, mapExchanges };
