import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './FormExecution.css'; 

const FormExecution = () => {
  const { formJson } = useParams();
  const [currentStep, setCurrentStep] = useState(-1); 
  const [responses, setResponses] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([{ type: 'bot', text: 'Hello' }]);
  const [formElements, setFormElements] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (formJson) {
      try {
        const parsedElements = JSON.parse(atob(formJson));
        console.log('Parsed form elements:', parsedElements);
        setFormElements(parsedElements); 
      } catch (e) {
        setMessages([{ type: 'bot', text: 'Error: Invalid form data.' }]);
        return;
      }
    } else {
      setMessages([{ type: 'bot', text: 'Error: Form data not provided.' }]);
      return;
    }
  }, [formJson]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleGreeting = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: 'Hi' },
      { type: 'bot', text: 'It feels like you are new here' },
      getNextQuestion(0)
    ]);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < formElements.length) {
      setResponses([...responses, inputValue]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: inputValue },
        getNextQuestion(currentStep + 1)
      ]);
      setInputValue('');
      setCurrentStep(currentStep + 1);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getNextQuestion = (step) => {
    const element = formElements[step];
    if (element) {
      switch (element.type) {
        case 'text':
          return { type: 'bot', text: 'Please enter the text:' };
        case 'email':
          return { type: 'bot', text: 'Please enter your email address:' };
        case 'image':
          return { type: 'bot', text: 'Please provide the image URL:' };
        case 'video':
          return { type: 'bot', text: 'Please provide the video URL:' };
        case 'gif':
          return { type: 'bot', text: 'Please provide the GIF URL:' };
        case 'number':
          return { type: 'bot', text: 'Please enter a number:' };
        case 'phone':
          return { type: 'bot', text: 'Please enter your phone number:' };
        case 'date':
          return { type: 'bot', text: 'Please enter the date:' };
        case 'rating':
          return { type: 'bot', text: 'Please provide a rating:' };
        default:
          return { type: 'bot', text: 'Unknown element type.' };
      }
    } else {
      return { type: 'bot', text: 'Form submission complete!' };
    }
  };

  const renderInputElement = () => {
    const element = formElements[currentStep];
    console.log('Rendering element:', element); 
    if (element) {
      switch (element.type) {
        case 'text':
        case 'email':
        case 'image':
        case 'video':
        case 'number':
        case 'gif':
          return (
            <input
              type={element.type === 'email' ? 'email' : 'text'}
              value={inputValue}
              onChange={handleInputChange}
              placeholder={`Enter ${element.type}`}
              className="input-field"
            />
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="form-execution">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type} fade-in`}>
            <div className={`avatar ${msg.type}-avatar`}></div>
            {msg.text}
          </div>
        ))}
        {currentStep >= 0 && currentStep < formElements.length && (
          <div className="input-container">
            {renderInputElement()}
            <button onClick={handleNextStep} className="next-button">Next</button>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {currentStep === -1 && (
        <div className="greeting-container">
          <button className="hi-button" onClick={handleGreeting}>Hi</button>
        </div>
      )}
    </div>
  );
};

export default FormExecution;
