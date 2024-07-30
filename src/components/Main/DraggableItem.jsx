import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableItem = ({ id, type, index, onRemove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
    hover: (item) => {
      if (item.index !== index) {
        //Pending : Implementing the flow elements movement
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="form-element"
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        width: '315px',
        opacity: isDragging ? 0.5 : 1,
        position: 'relative',
      }}
    >
      <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
      {type === 'text' && <input type="text" placeholder="Enter text here" />}
      {type === 'number' && <input type="number" placeholder="Enter number here" />}
      {type === 'email' && <input type="email" placeholder="Enter email here" />}
      {type === 'phone' && <input type="tel" placeholder="Enter phone number here" />}
      {type === 'date' && <input type="date" />}
      {type === 'rating' && <input type="number" min="1" max="5" placeholder="Rate 1-5" />}
      {type === 'image' && <input type="url" placeholder="Enter image URL here" />}
      {type === 'video' && <input type="url" placeholder="Enter video URL here" />}
      {type === 'gif' && <input type="url" placeholder="Enter GIF URL here" />}
      <button
        onClick={() => onRemove(id)}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '5px',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </div>
  );
};

export default DraggableItem;
