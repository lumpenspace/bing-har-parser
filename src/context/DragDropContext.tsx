import React, { createContext, useState, useEffect } from 'react';

const DragDropContext = createContext({
  isDragging: false,
  setIsDragging: (isDragging: boolean) => {},
});

export const DragDropContextProvider = (props: any) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    console.log(e.dataTransfer.files);
    return false;
  }

  return (
    <DragDropContext.Provider value={{ isDragging, setIsDragging }}>
      <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e)}>
        {props.children}
      </div>
    </DragDropContext.Provider>
  );
}