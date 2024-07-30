import React from 'react';
import styles from '../styles/Part9.module.css';
import Part9img from '../assets/Part9img.png'

function Part9() {
  return (
    <div className={styles.Part9}>
      <div className={styles.textContainer}>
        <h1>Loved by teams and creators from all around the world</h1>
        
      </div>
      <img src={Part9img} alt="Part9" className={styles.image} />
    </div>
  );
}

export default Part9;
