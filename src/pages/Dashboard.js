import React from "react";
import "./../components/styles/dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>This is The Dashboard</h1>
      <div className="dash-bxs">
        <div className="dash-amt ddt">
          <h1>$2500</h1>
        </div>
        <div className="dash-tour ddt">
          <h1>150 Tours</h1>
        </div>
        <div className="dash-loged ddt">
          <h1>150 Users</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
