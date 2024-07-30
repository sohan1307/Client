import React from 'react'
import styles from '../styles/Part4.module.css'
import Part4img from '../assets/Part4img.png'

function Part4() {
  return (
    <div className={styles.part4}>
      <img src={Part4img} alt='Part4' className={styles.image} />
      <div className={styles.textContainer}>
        <h1>Easy building<br/>Experience</h1>
        <p>All you have to do is drag and<br/> drop blocks to create your app.<br/>Even if you have custom needs,<br/> you can always add custom<br/>code.</p>
      </div>
    </div>
  )
}

export default Part4
