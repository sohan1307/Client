import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './FormBuilder.css';
import DroppableArea from './DroppableArea';
import DraggableElement from './DraggableElement';


const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);
  const [formLink, setFormLink] = useState('');
  const [selectedTab, setSelectedTab] = useState('Flow');

  const handleDrop = (type) => {
    setFormElements(prevElements => [...prevElements, { type, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setFormElements(prevElements => prevElements.filter(element => element.id !== id));
  };

  const saveForm = () => {
    const formJson = JSON.stringify(formElements);
    const link = `${window.location.origin}/form/${btoa(formJson)}`;
    setFormLink(link);
  };
  

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      if (formLink) {
        navigator.clipboard.writeText(formLink).then(() => {
          alert('Link copied to clipboard!');
        }).catch((error) => {
          console.error('Failed to copy:', error); 
          alert('Failed to copy the link.');
        });
      } else {
        alert('No link to copy.');
      }
    } else {
      alert('Clipboard API is not supported by your browser.');
    }
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="form-builder">
      <div className="toolbar">
      <input
        type="text"
        placeholder="Form Title"
        className="form-title-input"
      />
      <div className="toolbar-buttons">
        {["Flow", "Theme", "Response"].map((tab) => (
          <button
            key={tab}
            className={`toolbar-button ${
              selectedTab === tab ? "selected" : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="toolbar-actions">
        <button onClick={saveForm} className="toolbar-action-button">
          Save
        </button>
        <button onClick={copyToClipboard} className="toolbar-action-button">
          Share
        </button>
      </div>
    </div>
        <div className="main-content">
          <div className="elements">
            <h3>Bubbles</h3>
            <div className="element-row">
              {['Text', 'Image', 'GIF', 'Video'].map((type) => (
                <DraggableElement key={type} type={type.toLowerCase()}>
                  {type}
                </DraggableElement>
              ))}
            </div>
            <h3>Inputs</h3>
            <div className="element-row">
              {['Text', 'Number', 'Email', 'Phone', 'Date', 'Rating'].map((type) => (
                <DraggableElement key={type} type={type.toLowerCase()}>
                  {type}
                </DraggableElement>
              ))}
            </div>
          </div>
          <DroppableArea formElements={formElements} onDrop={handleDrop} onDelete={handleDelete} />
        </div>
        {/* {formLink && (
          <div className="form-link-container">
            <p>Form link: <a href={formLink} target="_blank" rel="noopener noreferrer">{formLink}</a></p>
            <button onClick={copyToClipboard}>Copy Link</button>
          </div>
        )} */}
      </div>
    </DndProvider>
  );
};

export default FormBuilder;
