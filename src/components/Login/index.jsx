import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/Dashboard";
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
        <div className={styles.login_container}>
			<Link to="/" className={styles.back_button}>
                &#8592;
            </Link>
            <div className={styles.login_form_container}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
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
                    <h1>Password</h1>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.green_btn}>
                        Log In
                    </button>
                </form>
                <div className={styles.right}>
                    <span>Don't have an account?</span>
                    <Link to="/signup" className={styles.white_btn}>
                        Register now
                    </Link>
                </div>
            </div>
            <div className={styles.ellipse}></div>
            <div className={styles.ellipse2}></div>
            <div className={styles.polygon_shadow}></div>
            <div className={styles.polygon}></div>
        </div>
    );
};

export default Login;
