import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Part1.module.css';
import Part1img from '../assets/Part1img.png'
function Part1() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup'); 
    };

    return (
        <div className={styles.Part1}>
            <h1>Build advanced chatbots <br /> visually</h1>
            <p>Typebot gives you powerful blocks to create unique chat experiences. Embed them</p>
                <p>anywhere on your web/mobile apps and start collecting results like magic.</p>
            <button onClick={handleSignup}>Create a FormBot for free</button>
            <div>
            <img src={Part1img} alt='Part1'></img>
            </div>
        </div>

        

    );
}

export default Part1;
