import {  Conversation, WsHar } from 'lib/types';
import { mapExchanges } from 'lib/websocket';
import { useState, useEffect } from 'react';

const useConversationStorage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const conversations = Object.keys(localStorage).map((key) => {
      const conversation = localStorage.getItem(key);
      if (conversation) {
        return JSON.parse(conversation);
      }
      return null;
    }).filter((conversation) => conversation !== null) as Conversation[];
    setConversations(conversations);
  }, []);

  const add = (name: string, har: WsHar) => {
    const newConversation = mapExchanges(har);

    localStorage.setItem(name, JSON.stringify(newConversation));
    setConversations([...conversations, newConversation]);
  };

  const at = (name: string) => {
    const conversation = localStorage.getItem(name);
    if (conversation) {
      return JSON.parse(conversation);
    }
    return null;
  };

  const list = () => {
    return conversations;
  };

  return {
    add,
    at,
    list
  };
}

export default useConversationStorage;