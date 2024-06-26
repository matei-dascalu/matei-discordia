import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
// import LoginBackground from "./background/Background";

export function Login() {
    return (
        <>
            <div className="background">
                <div className="wrapper">
                    <div className="card">
                        <h1>Welcome to MateiDiscordia!</h1>
                        <h2>We're so excited to see you again! </h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">
                                    EMAIL OR PHONE NUMBER <span> *</span>
                                </label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    PASSWORD <span> *</span>
                                </label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <a href="#" className="el-a">
                                Forgot your password?
                            </a>

                            <Link to="/mainapp">
                                <button className="el-but">Log In</button>
                            </Link>
                        </form>
                        <p className="el-p">
                            Need an account?{" "}
                            <a className="el-a" href="#">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
