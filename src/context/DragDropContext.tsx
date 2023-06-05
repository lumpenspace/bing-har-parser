import { createContext, useState, useEffect } from 'react';
import { WsHar, WsEntry } from 'lib/types';

const DragDropContext = createContext({
  isDragging: false,
  setIsDragging: (isDragging: boolean) => {},
});

export const DragDropProvider = (props: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<WsEntry>();
  
  const setLogEntries = (entries: WsEntry[]) => {
    setCurrentEntry(entries[0] as WsEntry);
  }


  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data:WsHar = JSON.parse(e.target?.result as string);
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