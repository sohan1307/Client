import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import Navimg from '../assets/Navimg.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={Navimg} alt='FormBot logo' />
                <p>FormBot</p>
            </div>
            <div className={styles.buttons}>
                <button onClick={handleLogin} className={styles.nav_btn_signin}>
                    Sign in
                </button>
                <button onClick={handleSignup} className={styles.nav_btn_signup}>
                    Create a FormBot
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
