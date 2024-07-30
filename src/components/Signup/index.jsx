import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
 
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            setError('enter same passwords in both fields');
            return;
        }
        try {
            const url = 'http://localhost:8080/api/users';
            const { data: res } = await axios.post(url, data);
            navigate('/login');
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <Link to="/" className={styles.back_button}>
                &#8592;
            </Link>
            <div className={styles.signup_form_container}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <div className={styles.input_group}>
                        <h1>Username</h1>
                        <input
                            type="text"
                            placeholder="Enter a username"
                            name="userName"
                            onChange={handleChange}
                            value={data.userName}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <h1>Email</h1>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <h1>Password</h1>
                        <input
                            type="password"
                            placeholder=".........."
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <h1>Confirm Password</h1>
                        <input
                            type="password"
                            placeholder=".........."
                            name="confirmPassword"
                            onChange={handleChange}
                            value={data.confirmPassword}
                            required
                            className={styles.input}
                        />
                    </div>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.signup_btn}>
                        Sign Up
                    </button>
                </form>
                <div className={styles.login_link}>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse2}></div>
			<div className={styles.polygon_shadow}></div>
            <div className={styles.polygon}></div>
        </div>
    );
};

export default Signup;
 