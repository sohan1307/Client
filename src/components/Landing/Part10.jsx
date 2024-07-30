import React from 'react';
import styles from '../styles/Part10.module.css';
import { useNavigate } from 'react-router-dom';
import traingle from '../assets/traingle.png';
import Part10img from '../assets/Part10img.png';

function Part10() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.Part10}>
      <img src={traingle} alt="traingle" className={styles.traingle} />
      <div className={styles.content}>
        <h1>Improve conversion and user engagement</h1>
        <h1>with FormBots</h1>
        <button onClick={handleSignup} className={styles.button}>
          Create a FormBot 
        </button>
        <p className={styles.plan}>No trial. Generous free plan.</p>
      </div>
      <img src={Part10img} alt="Part10" className={styles.Part10img} />
    </div>
  );
}

export default Part10;
