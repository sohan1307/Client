import React from 'react';
import styles from '../styles/Part6.module.css';
import Part6img from '../assets/Part6img.png';

function Part6() {
  return (
    <div className={styles.Part6}>
      <img src={Part6img} alt="Part6" className={styles.image} />
      <div className={styles.textContainer}>
        <h1>Integrate with any Platform</h1>
        <p>
          Typebot offers several native integrations blocks as well as instructions on<br />
          how to embed typebot on particular platforms
        </p>
      </div>
    </div>
  );
}

export default Part6;
