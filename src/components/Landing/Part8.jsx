import React from 'react';
import styles from '../styles/Part8.module.css';
import Part8img from '../assets/Part8img.png'

function Part8() {
  return (
    <div className={styles.Part8}>
      <div className={styles.textContainer}>
        <h1>Add many more features</h1>
        <p>
        Typebot makes form building easy and comes with powerful features
        </p>
        
      </div>
      <img src={Part8img} alt="Part8" className={styles.image} />
    </div>
  );
}

export default Part8;
