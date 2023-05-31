import { read } from 'fs';
import { Har, Entry } from 'har-format';
import React, { createContext, useState, useEffect } from 'react';
import { parseWebSocket } from 'lib/websocket';
import { ParsedWebsocketEntry, WebSocketEntry } from 'lib/types';

type WSEntry = Entry & {
  _resourceType: 'websocket';
  _webSocketMessages: any[];
}


const DragDropContext = createContext({
  isDragging: false,
  setIsDragging: (isDragging: boolean) => {},
});

export const DragDropContextProvider = (props: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [logData, setLogData] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<ParsedWebsocketEntry[]>();
  
  const setLogEntries = (entries: Entry[]) => {
    setLogData(entries);
    setCurrentEntry(parseWebSocket((entries[0] as WSEntry)._webSocketMessages));
  }


  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data:Har = JSON.parse(e.target?.result as string);
      if (data.log.entries) {
        console.log(data.log.entries)
        setLogEntries(data.log.entries.filter(
          (entry) => (entry._resourceType === 'websocket')));
      }
    }

    const file = reader.readAsText(e.dataTransfer.files[0]);
    console.log(file);

    return false;
  }

  useEffect(() => {
    console.log(currentEntry);
  }, [currentEntry]);

  return (
    <DragDropContext.Provider value={{ isDragging, setIsDragging }}>
      <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e)}>
        {props.children}
      </div>
    </DragDropContext.Provider>
  );
}