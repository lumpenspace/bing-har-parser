"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageMapper = void 0;
const unwrapJSON = (text) => {
    try {
        const json = text.replace("```json\n", "").replace("\n```", "");
        return JSON.parse(json);
    }
    catch (error) {
        console.error(`Error parsing JSON: ${error}`);
        return { error };
    }
};
const redactSensitiveInfo = (message) => {
    const { location, locationHints } = message, rest = __rest(message, ["location", "locationHints"]);
    if (!(location || locationHints))
        return message;
    return Object.assign({ location: "#redacted", locationHints: "#redacted" }, rest);
};
const getMessageMapper = () => {
    let lastMessage = "";
    let lastMessageId = "";
    return (item) => {
        const { arguments: [{ messages, throttling, cursor }] } = item;
        const message = messages && redactSensitiveInfo(messages[0]);
        if (throttling)
            return ["throttling", throttling];
        if (cursor)
            return ["cursor", cursor];
        if (!message)
            return ["unknown", item];
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
                return ["sneakyUpdate", Object.assign({ hiddenText, lastMessageId }, sharedFields)];
            }
        }
        switch (messageType) {
            case MessageType.InternalSearchResult:
                return [messageType, Object.assign(Object.assign({}, unwrapJSON(hiddenText)), sharedFields)];
            case MessageType.InternalSearchQuery:
                return [messageType, { text, hiddenText }];
            case MessageType.InternalLoaderMessage:
                return [messageType, { text }];
            case MessageType.Disengaged:
                return [messageType, Object.assign({ text }, sharedFields)];
        }
        return [messageType, message];
    };
};
exports.getMessageMapper = getMessageMapper;
