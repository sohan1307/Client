import React from 'react';
import styles from '../styles/Part3.module.css';
import Part3img from '../assets/Part3img.png';

function Part3() {
  return (
    <div className={styles.part3}>
      <div className={styles.formContainer}>
        <h2>Full Name <span className={styles.required}>*</span></h2>
        <input type='text' placeholder='Full Name' />

        <h2>Email <span className={styles.required}>*</span></h2>
        <input type='email' placeholder='Email' />

        <h2>What services are you interested in? <span className={styles.required}>*</span></h2>
        <div className={styles.checkboxContainer}>
          <label><input type='checkbox' /> Website Dev</label>
          <label><input type='checkbox' /> Content Marketing</label>
          <label><input type='checkbox' /> Social Media</label>
          <label><input type='checkbox' /> UI/UX Design</label>
        </div>

        <h2>Additional Information <span className={styles.required}>*</span></h2>
        <input type='text' placeholder='Additional Information' className={styles.additionalInfo} />

        <button className={styles.submitButton}>Submit</button>
      </div>

      <div className={styles.imageContainer}>
        <img src={Part3img} alt='Welcome' className={styles.image} />
        <p>Hi!</p>
      </div>
    </div>
  );
}

export default Part3;
