import { BiSearchAlt2, BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/10001.png";
import MenuModal from "./MenuModal";
import { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const style = { fontSize: "2rem", color: "#fff", fontWeight: "bold" };
  return (
    <>
      {modal && <MenuModal setModal={setModal} />}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <button className="sec-btn">RESERVE</button>
          <div className="icon">
            <BiSearchAlt2 />
          </div>
          <div
            onClick={() => {
              setModal(true);
            }}
            className="menu icon"
          >
            <BiMenuAltRight className="menu-right" />
          </div>
        </div>
      </div>
      {/* <MenuModal /> */}
    </>
  );
};

export default Navbar;
