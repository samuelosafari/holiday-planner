import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { MdFlight, MdSettingsApplications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./../components/styles/dash.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      dicon: <FaTh />,
    },
    {
      path: "dashtours",
      name: "Tours",
      dicon: <MdFlight />,
    },
    {
      path: "dashbookings",
      name: "Bookings",
      dicon: <FaRegChartBar />,
    },
    {
      path: "dashtsettings",
      name: "Settings",
      dicon: <MdSettingsApplications />,
    },
  ];
  return (
    <div className="dcontainer">
      <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="dicon">{item.dicon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Sidebar;
