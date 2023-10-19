import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import holidaylogin from "./../assets/holiday-login.jpg";
import "./../components/styles/signup.css";

const SIgnupPage = () => {
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
            <form>
              <div className="sign-formgroup">
                <label>FirstName</label>
                <input type="text" placeholder="" />
              </div>
              <div className="sign-formgroup">
                <label>LastName</label>
                <input type="text" placeholder="" />
              </div>
              <div className="sign-formgroup">
                <label>Email</label>
                <input type="text" placeholder="example@email.com" />
              </div>
              <div className="sign-formgroup">
                <label>Password</label>
                <input type="text" placeholder="Atleast 8 characters" />
                <div>
                  <button className="sign-btn">Sign Up</button>
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
