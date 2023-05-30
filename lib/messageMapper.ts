const unwrapJSON = (text:string) => {
  try {
    const json = text.replace("```json\n", "").replace("\n```", "");
    return JSON.parse(json);
  } catch (error) {
    console.error(`Error parsing JSON: ${error}`);
    return { error };
  }
}

const redactSensitiveInfo = (message: any) => {
  const { location, locationHints, ...rest } = message;
  if (!(location || locationHints)) return message;
  return { location: "#redacted", locationHints: "#redacted", ...rest };
}

const getMessageMapper = () => {
  let lastMessage = "";
  let lastMessageId = "";

  return (item: any):[string, any] => {
    const { arguments: [{ messages, throttling, cursor }] } = item;
    const message = messages && redactSensitiveInfo(messages[0]);
    if (throttling) return ["throttling", throttling];
    if (cursor) return ["cursor", cursor];
    if (!message) return ["unknown", item];

    const { messageType, text, hiddenText, messageId, author, contentOrigin } = message;
    const sharedFields = { messageId, author, contentOrigin };

    if (!messageType && text) {
      const newText = text.replace(lastMessage, "");
      lastMessage = text;
      lastMessageId = messageId;
      return ["updateResponse", newText];
    }

    if (!messageType && !text && messageId === lastMessageId) {
      if (hiddenText) {
        return ["sneakyUpdate", { hiddenText, lastMessageId, ...sharedFields }];
      }
    }
    switch (messageType) {
      case MessageType.InternalSearchResult:
        return [messageType, { ...unwrapJSON(hiddenText), ...sharedFields }];
      case MessageType.InternalSearchQuery:
        return [messageType, { text, hiddenText }];
      case MessageType.InternalLoaderMessage:
        return [messageType, { text }];
      case MessageType.Disengaged:
        return [messageType, { text, ...sharedFields }];
    }
    return [messageType, message];
  }

}


export { getMessageMapper }