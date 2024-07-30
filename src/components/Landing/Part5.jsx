import React from 'react'
import styles from '../styles/Part5.module.css'
import Part5img from '../assets/Part5img.png'

function Part5() {
  return (
    <div className={styles.Part5}>
      <div className={styles.textContainer}>
        <h1>Embed it in a click</h1>
       <p>Embedding your typebot in<br/> your applications is a walk in<br/> the park. Typebot gives you<br/> several step-by-step platform- <br/>specific instructions. Your <br/>typebot will always feel "native".</p>
      </div>
      <img src={Part5img} alt='Part5' className={styles.image} />
    </div>
  )
}

export default Part5
