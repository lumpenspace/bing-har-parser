import {  Conversation } from 'lib/types';
import { PropsWithChildren, FC, createContext, useState, useContext } from 'react';
import useConversationStorage from './useConversationStorage';

interface ConversationListValue {
  addConversationJSON: (name: string, conversationJSON: string) => void;
  selectConversation: (conversation: Conversation) => void;
  getList: () => Conversation[];
  getSelectedConversation: () => Conversation | null;
}

export const ConversationList = createContext<ConversationListValue | null>(null);

const ConversationListProvider: FC<PropsWithChildren> = ({ children }) => {

  const conversations = useConversationStorage();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  const addConversationJSON = (name: string, conversationJSON: string) => {
    const parsedJSON = JSON.parse(conversationJSON);
    name = name.replace('.har', '');
    conversations.add(name, parsedJSON);
  };


  const selectConversation = (conversation: Conversation) =>
    setSelectedConversation(conversation);

  const getSelectedConversation = () =>
    conversations.at(selectedConversation?.name || '');

  const contextValue: ConversationListValue = {
    addConversationJSON,
    selectConversation,
    getList: conversations.list,
    getSelectedConversation,
  };

  return (
    <ConversationList.Provider value={contextValue}>
      {children}
    </ConversationList.Provider>
  );
};

const useConversations = () => {
  const context = useContext(ConversationList);
  if (context === null) {
    throw new Error('useConversations must be used within a ConversationListProvider');
  }
  return context;
}

export { useConversations };
export default ConversationListProvider;