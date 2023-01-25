import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <ul>
        <li>
          <Link to={"introduccion"}>Introduccion</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
