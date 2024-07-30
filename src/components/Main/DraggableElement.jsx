import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableElement = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes[type.toUpperCase()],
    item: { type: type.toLowerCase() },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-element"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '10px',
        margin: '5px',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableElement;
