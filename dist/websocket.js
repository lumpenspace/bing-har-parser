"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWebSocketDataProp = exports.parseWebSocket = void 0;
const messageMapper_1 = require("./messageMapper");
const getIntroData = (data) => {
    const introData = data.arguments[0];
    return introData;
};
const parseWebSocket = (wsEntries) => {
    const parsedEntries = [];
    const mapMessage = (0, messageMapper_1.getMessageMapper)();
    for (const { time, type: direction, data } of wsEntries) {
        const push = (type, content) => parsedEntries.push([time, type, content]);
        const parsedData = parseWebSocketDataProp(data);
        for (const item of parsedData) {
            if (!item.type)
                continue;
            switch (item.type) {
                case 6:
                    push(direction === "send" ? "ping" : "pong");
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
};
exports.parseWebSocket = parseWebSocket;
const parseWebSocketDataProp = (data) => {
    let parsedData = [];
    try {
        const dataStrings = data.split("\u001e");
        for (const dataString of dataStrings) {
            if (dataString.length === 0) {
                continue;
            }
            const parsedDataString = JSON.parse(dataString);
            parsedData.push(parsedDataString);
        }
    }
    catch (error) {
        console.error(`Error parsing data data: ${error}`);
    }
    return parsedData;
};
exports.parseWebSocketDataProp = parseWebSocketDataProp;
