import menuLogo from "../assets/menuLogo.png";
import { Link } from "react-router-dom";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="holiday-description">
          <div className="footer-logo">
            <img src={menuLogo} alt="logo" />
          </div>
          <p>
            Holiday Planners sit amet consectetur adipisicing <br></br> elit.
            Perferendis sapiente tenetur officiis explicabo<br></br> fugit, sit
            mollitia eum atque excepturi quaerat<br></br> autem.
          </p>
          <div className="email-submit">
            <input type="text" placeholder="Enter Your Email" />
            <button className="">Submit</button>
          </div>
          <div className="payment-cards">
            {/* <FaCcPaypal className="paypal" />
            <FaCcVisa />
            <FaCcMastercard /> */}
          </div>
        </div>
        <div className="navigate-page">
          <h2>Navigation</h2>
          <hr />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Destination</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="need-help">
          <h2>Need Help?</h2>
          <hr />
          <div className="contact footer-location">
            <p className="contact-title">Call Us</p>
            <p className="contact-title">+123 456 7890</p>
          </div>
          <div className="email footer-location">
            <p className="contact-title">Email for Us</p>
            <p className="contact-title">holidayplanners@gmail.com</p>
          </div>
          <div className="location footer-location">
            <p className="contact-title">Location</p>
            <p className="contact-title">Main Street, Victoria 8007.</p>
          </div>
          <div className="social-media footer-location">
            <p className="contact-title">Follow us</p>
          </div>
        </div>
      </div>
      <div className="reserved">
        <hr />
      </div>
      <div className="footer-items">
        <p className="geek">
          Copyright © 2021 <span>Geek Code Lab</span>. All Rights Reserved.
        </p>
        <div className="policy-management">
          <div className="privacy poli">
            <p>Privacy Policy</p>
          </div>
          <div className="terms poli">
            <p>Terms of Use</p>
          </div>
          <div className="cookie-policy poli">
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
