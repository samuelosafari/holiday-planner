import menuLogo from "../assets/menuLogo.png";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import { Link } from "react-router-dom";

const MenuModal = ({ setModal }) => {
  const styles = { color: "#fff", fontSize: "20px" };
  return (
    <div className="menu-modal">
      <div className="menu-nav">
        <img src={menuLogo} alt="logo for menu" className="menu-logo" />
        <div
          onClick={() => {
            setModal(false);
          }}
          className="close-menu icon"
        >
          <AiOutlineClose style={styles} />
        </div>
      </div>
      <div className="menu-links">
        <div className="menu-link-container">
          <div
            className="menu-link"
            onClick={() => {
              setModal(false);
            }}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="menu-link"
            onClick={() => {
              setModal(false);
            }}
          >
            <Link to="tourlist">Tour</Link>
          </div>
          <div
            className="menu-link"
            onClick={() => {
              setModal(false);
            }}
          >
            <Link to="login">Login</Link>
          </div>
          <div
            className="menu-link"
            onClick={() => {
              setModal(false);
            }}
          >
            <Link to="signup">Sign Up</Link>
          </div>
          <div
            className="menu-link"
            onClick={() => {
              setModal(false);
            }}
          >
            <Link to="contact">Contact Us</Link>
          </div>
        </div>
        <div className="menu__social-icons">
          <div className="single__menu-icon icon">
            <BiLogoFacebook className="trial" />
          </div>
          <div className="single__menu-icon icon">
            <BsInstagram className="trial" />
          </div>
          <div className="single__menu-icon icon">
            <BsTwitter className="trial" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
