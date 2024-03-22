import "./Login.css";
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
                                <label for="email">
                                    EMAIL OR PHONE NUMBER <span> *</span>
                                </label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label for="password">
                                    PASSWORD <span> *</span>
                                </label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <a>Forgot your password?</a>
                            <button type="submit">Log In</button>
                        </form>
                        <p>
                            Need and account? <a href="#">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
