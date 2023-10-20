import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import holidaylogin from "./../assets/holiday-login.jpg";
import "./../components/styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SIgnupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      data: {
        fullname: firstName + lastName,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        setFirstName("");
        setLastName("");
        setPassword("");
        setEmail("");
        localStorage.setItem("token", res.data.access_token);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("An Error Occured");
      });
  };
  return (
    <div className="signPage-container">
      <div className="signup-container">
        <div className="sign-img">
          <img src={holidaylogin} alt="" />
        </div>
        <div className="sign-large">
          <div className="sign-content">
            <h2>Join The Holiday Adventure Planners</h2>
            <p>
              sign up to embark on the unforgottable adventure with holiday
              planners
            </p>
            <form onSubmit={handleSignUp}>
              <div className="sign-formgroup">
                <label>FirstName</label>
                <input
                  value={firstName}
                  type="text"
                  placeholder="first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="sign-formgroup">
                <label>LastName</label>
                <input
                  value={lastName}
                  type="text"
                  placeholder="last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="sign-formgroup">
                <label>Email</label>
                <input
                  value={email}
                  type="text"
                  placeholder="example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sign-formgroup">
                <label>Password</label>
                <input
                  value={password}
                  type="password"
                  placeholder="Atleast 8 characters"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div>
                  <button onClick={(e) => handleSignUp(e)} className="sign-btn">
                    Sign Up
                  </button>
                </div>
                {/* <div className="retrieve-password">
                  <div className="inexistent-box"></div>
                  <p style={{ color: "blue" }}>Forgot Password?</p>
                </div> */}
              </div>
            </form>
            {/* <div className="sign-methods">
              <div className="signGoogle">
                <FcGoogle style={{ fontSize: "25px" }} />
                <p>Google</p>
              </div>
              <div className="signFacebook">
                <MdFacebook style={{ color: "blue", fontSize: "25px" }} />
                <p>Facebook</p>
              </div>
            </div> */}
            <p className="sign-para">
              Have an account?
              <span style={{ color: "blue", marginLeft: "4px" }}>Sign In</span>
            </p>
            <div className="sign-footer">
              <p>2023 all rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnupPage;
