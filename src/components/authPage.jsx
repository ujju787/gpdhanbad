// src/components/AuthPage.jsx
import React, { useState, useEffect } from "react";
import "./authPageCss.css";

const AuthPage = ({ mode = "signup" }) => {
  const [isSignUp, setIsSignUp] = useState(mode === "signup");

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({
    username1: "",
    password1: "",
    cpassword1: "",
  });

  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    setIsSignUp(mode === "signup");
  }, [mode]);

  const handleSwitch = (mode) => {
    setIsSignUp(mode === "signup");
    setAlertMsg(null);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "admin") {
      setAlertType("success");
      setAlertMsg("You are logged in!");
      window.location.href = "https://gpdhanbad.ac.in/";
    } else {
      setAlertType("danger");
      setAlertMsg("Invalid credentials!");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupData.password1 !== signupData.cpassword1) {
      setAlertType("danger");
      setAlertMsg("Passwords do not match.");
      return;
    }
    setAlertType("success");
    setAlertMsg("Account created. You can log in now.");
    setIsSignUp(false);
  };

  return (
    <div className={`form-first-container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignup}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="username1"
                value={signupData.username1}
                onChange={(e) =>
                  setSignupData({ ...signupData, username1: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password1"
                value={signupData.password1}
                onChange={(e) =>
                  setSignupData({ ...signupData, password1: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpassword1"
                value={signupData.cpassword1}
                onChange={(e) =>
                  setSignupData({ ...signupData, cpassword1: e.target.value })
                }
              />
            </div>
                <button type="button" className="form-btn text-center ">
                  <span className="mt-4">sign up </span></button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <button type="button" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>

          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <input type="submit" className="form-btn solid" value="Login" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <button type="button" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="panel-content">
            <p className="college-name-in-form">
              GOVERNMENT POLYTECHNIC DHANBAD
            </p>
            <p>
              Welcome to Government Polytechnic Dhanbad website. Complete your
              Sign Up access to continue.
            </p>
            <button
              className="form-btn transparent"
              onClick={() => handleSwitch("signup")}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="panel-content">
            <p className="college-name-in-form">
              GOVERNMENT POLYTECHNIC DHANBAD
            </p>
            <p>
              Welcome to Government Polytechnic Dhanbad website. Complete your
              Sign In access to continue.
            </p>
            <button
              className="form-btn transparent"
              onClick={() => handleSwitch("login")}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
