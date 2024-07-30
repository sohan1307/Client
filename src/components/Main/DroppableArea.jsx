import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import './DroppableArea.css'; 

const DroppableArea = ({ onDrop, formElements, onDelete, onMove }) => {
  const [, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: (item) => onDrop(item.type),
  }));

  return (
    <div
      ref={drop}
      className="droppable-area"
    >
      {formElements.length === 0 ? (
        <div className="start-message">Start by dragging elements here</div>
      ) : (
        formElements.map((element, index) => (
          <div
            key={element.id}
            className="form-element"
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '10px',
              width: '315px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              backgroundColor: '#18181B'
            }}
          >
            <button
              onClick={() => onDelete(index)}
              className="delete-button"
            >
              &times;
            </button>
            <h4>{element.type ? element.type.charAt(0).toUpperCase() + element.type.slice(1) : 'Unknown Type'}</h4>
            {element.type === 'text' && <input type="text" placeholder="Enter text here" />}
            {element.type === 'number' && <input type="number" placeholder="Enter number here" />}
            {element.type === 'email' && <input type="email" placeholder="Enter email here" />}
            {element.type === 'phone' && <input type="tel" placeholder="Enter phone number here" />}
            {element.type === 'date' && <input type="date" />}
            {element.type === 'rating' && <input type="number" min="1" max="5" placeholder="Rate 1-5" />}
            {element.type === 'image' && <input type="url" placeholder="Enter image URL here" />}
            {element.type === 'video' && <input type="url" placeholder="Enter video URL here" />}
            {element.type === 'gif' && <input type="url" placeholder="Enter GIF URL here" />}
          </div>
        ))
      )}
    </div>
  );
};

export default DroppableArea;
