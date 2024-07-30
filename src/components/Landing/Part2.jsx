import React from 'react';
import styles from '../styles/Part2.module.css';
import Cross from '../assets/Cross.png';
import right from '../assets/right.png';

function Part2() {
  return (
    <div className={styles.part2}>
      <h1>Replace your old school forms<br /> with<br /> chatbots</h1>
      <p>
        Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by <br />
        <span className={styles.largeText}>3</span> <br />
        your conversion rate compared to classical forms.
      </p>
      <div className={styles.imageContainer}>
      <img src={Cross} alt='cross' className={styles.image1}/>
      <img src={right} alt='right' className={styles.image2}/>
      </div>
    </div>
  );
}

export default Part2;
