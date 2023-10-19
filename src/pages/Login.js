import "./../components/styles/login.css";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import holidaylogin from "./../assets/holiday-login.jpg";
const LoginPage = () => {
  return (
    <div className="loginPage-container">
      <div className="login-large">
        <div className="login-content">
          <h2>Welcome Back 👋</h2>
          <p>
            Today is a new day. It's your day. You shape it. <br></br> Sign up
            to start managing your projects.
          </p>
          <form>
            <div className="login-formgroup">
              <label>Email</label>
              <input type="text" placeholder="example@email.com" />
            </div>
            <div className="login-formgroup">
              <label>Password</label>
              <input type="text" placeholder="Atleast 8 characters" />
              <div>
                <button className="login-btn">Sign In</button>
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
