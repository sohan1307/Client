import React from 'react'
import Navbar from './Navbar'
import Part1 from './Part1.jsx'
import Part2 from './Part2.jsx'
import Part3 from './Part3.jsx'
import Part4 from './Part4.jsx'
import Part5 from './Part5.jsx'
import Part6 from './Part6.jsx'
import Part7 from './Part7.jsx'
import Part8 from './Part8.jsx'
import Part9 from './Part9.jsx'
import Part10 from './Part10.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Home.module.css'

function home() {
  return (
    <div className={styles.home}>
        <>
        <Navbar/>
        <Part1/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <Part6/>
        <Part7/>
        <Part8/>
        <Part9/>
        <Part10/>
        <Footer/>

        </>
    </div>
  )
}

export default home