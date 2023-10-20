import "./../components/styles/login.css";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import holidaylogin from "./../assets/holiday-login.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
        alert("You are Successfully logged in");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error Happened");
      });
  };
  return (
    <div className="loginPage-container">
      <div className="login-large">
        <div className="login-content">
          <h2>Welcome Back 👋</h2>
          <p>
            Today is a new day. It's your day. You shape it. <br></br> Sign up
            to start managing your projects.
          </p>
          <form onSubmit={handleLogIn}>
            <div className="login-formgroup">
              <label>Email</label>
              <input
                value={email}
                type="text"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-formgroup">
              <label>Password</label>
              <input
                value={password}
                type="password"
                placeholder="Atleast 8 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={(e) => handleLogIn(e)} className="login-btn">
                  Sign In
                </button>
              </div>
              <div className="retrieve-password">
                <div className="inexistent-box"></div>
                <p style={{ color: "blue" }}>Forgot Password?</p>
              </div>
            </div>
          </form>
          <div className="login-methods">
            <div className="loginGoogle">
              <FcGoogle style={{ fontSize: "25px" }} />
              <p>Google</p>
            </div>
            <div className="loginFacebook">
              <MdFacebook style={{ color: "blue", fontSize: "25px" }} />
              <p>Facebook</p>
            </div>
          </div>
          <p className="login-para">
            Don't you have an account?
            <span style={{ color: "blue", marginLeft: "4px" }}>Sign Up</span>
          </p>
          <div className="login-footer">
            <p>2023 all rights reserved</p>
          </div>
        </div>
        <div className="login-img">
          <img src={holidaylogin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
