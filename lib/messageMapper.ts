const unwrapJSON = (text:string) => {
  try {
    const json = text.replace("```json\n", "").replace("\n```", "");
    return JSON.parse(json);
  } catch (error) {
    console.error(`Error parsing JSON: ${error}`);
    return { error };
  }
}



const getMessageMapper = () => {
  let lastMessage = "";
  let lastMessageId = "";

  return (item: any):[string, any] => {
    const { arguments: [{ messages, throttling, cursor }] } = item;
    const message = messages && messages[0];
  
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
      case "InternalSearchResult":
        return ["result", { ...unwrapJSON(hiddenText), ...sharedFields }];
      case "InternalSearchQuery":
        return ["query", { text, hiddenText }];
      case "InternalLoaderMessage":
        return ["loader", { text }];
      case "TextMessage":
        return ["text", { text, ...sharedFields }];
    }
    return ["unknown", message];
  }

}


export { getMessageMapper }