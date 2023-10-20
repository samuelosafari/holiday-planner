import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function DasharedLayout() {
  return (
    <div className="parent-dashboard">
      <Sidebar />
      <div className="dasharedLayout">
        <Outlet />
      </div>
    </div>
  );
}

export default DasharedLayout;
