import { useState, useRef, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const sideBarLoginRef = useRef(null);
    const sideBarSigninRef = useRef(null);
    const sideBarAnimationRef = useRef(null);
    const loginAreaRef = useRef(null);
    const signinAreaRef = useRef(null);
    const mainContainerRef = useRef(null);

    useEffect(() => {
        Awake();
    }, []);

    function Awake() {
        ChangeTab("Login");

        setTimeout(() => {
            if (mainContainerRef.current) {
                mainContainerRef.current.classList.add("showing");
            }
        }, 250);
    }

    function ChangeTab(tab) {
        if (tab === "Login") {
            console.log("Selected Login");
            sideBarAnimationRef.current.classList.remove("right");
            sideBarLoginRef.current.classList.add("hidden");
            setTimeout(() => {
                sideBarSigninRef.current.classList.remove("hidden");
            }, 450);
            loginAreaRef.current.classList.remove("hidden");
            signinAreaRef.current.classList.add("hidden");
        } else {
            console.log("Selected SignIn");
            sideBarAnimationRef.current.classList.add("right");
            sideBarSigninRef.current.classList.add("hidden");
            setTimeout(() => {
                sideBarLoginRef.current.classList.remove("hidden");
            }, 450);
            loginAreaRef.current.classList.add("hidden");
            signinAreaRef.current.classList.remove("hidden");
        }
    }

    const navigate = useNavigate();

    const handleLogin = () => {

        event.preventDefault();
        navigate("/home", { replace: true });
    };

    return (
        <main className="container" ref={mainContainerRef}>
            <div className="change" id="sideBarAnimation" ref={sideBarAnimationRef}>
                <div className="change" id="sideBarLogin" ref={sideBarLoginRef}>
                    <h1>Welcome</h1>
                    <h5>
                        Already have an account?
                        <br />
                        <br />
                        Connect now
                        <br />
                        <button onClick={() => ChangeTab("Login")} className="button">
                            Login
                        </button>
                    </h5>
                    <div className="copyright">
                        <img className="logo" src="public/img/logoExample.png" alt="Logo" />
                        <h6>All rights reserved.</h6>
                    </div>
                </div>
                <div className="change" id="sideBarSignin" ref={sideBarSigninRef}>
                    <h1>Welcome</h1>
                    <h5>
                        Don't have an account?
                        <br />
                        <br />
                        Sign up now
                        <br />
                        <button onClick={() => ChangeTab("SignIn")} className="button">
                            Sign-up
                        </button>
                    </h5>
                    <div className="copyright">
                        <img className="logo" src="public/img/logoExample.png" alt="Logo" />
                        <h6>All rights reserved.</h6>
                    </div>
                </div>
            </div>

            <form className="loginArea" ref={loginAreaRef}>
                <div className="center">
                    <h1>Connect</h1>
                    <div className="input-box">
                        <input placeholder="E-mail" type="email" id="inputUser3" />
                        <img className="icon" src="public/img/icon_email.png" alt="Email Icon" />
                    </div>
                    <div className="input-box">
                        <input placeholder="Password" type="password" id="inputPassword3" />
                        <img className="icon" src="public/img/icon_locker.png" alt="Password Icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <b>
                            <a href="#">Forget password</a>
                        </b>
                    </div>
                    <button className="button" type="submit" onClick={handleLogin}>
                        Connect
                    </button>
                </div>
            </form>

            <form className="signinArea" ref={signinAreaRef}>
                <h1>Register</h1>
                <div className="input-box">
                    <input placeholder="Username" id="inputUser1" />
                    <img className="icon" src="public/img/icon_user.png" alt="User Icon" />
                </div>
                <div className="input-box">
                    <input placeholder="E-mail" type="email" id="inputUser2" />
                    <img className="icon" src="public/img/icon_email.png" alt="Email Icon" />
                </div>
                <div className="input-box">
                    <input placeholder="Password" type="password" id="inputPassword1" />
                    <img className="icon" src="public/img/icon_locker.png" alt="Password Icon" />
                </div>
                <div className="input-box">
                    <input placeholder="Confirm password" type="password" id="inputPassword2" />
                    <img className="icon" src="public/img/icon_locker.png" alt="Password Icon" />
                </div>
                <button className="button" type="submit">
                    Register
                </button>
            </form>
        </main>
    );
}

export default Login;
