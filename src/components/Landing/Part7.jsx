import React from 'react';
import styles from '../styles/Part7.module.css';
import Part7img from '../assets/Part7img.png';

function Part7() {
  return (
    <div className={styles.Part7}>
      <div className={styles.textContainer}>
        <h1>Collect results in real-time</h1>
        <p>
          One of the main advantages of a chat application is that you collect the user's responses on each question.
        </p>
        <h4>You won't lose any valuable data.</h4>
      </div>
      <img src={Part7img} alt="Part7" className={styles.image} />
    </div>
  );
}

export default Part7;
