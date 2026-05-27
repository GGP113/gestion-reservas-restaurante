import React from "react";
import "../styles/LogInStyle.css";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="">
      <SideBar />

      <main className="reservas-main-content">

        <Outlet/>






      </main>
    </div>
  );
}

export default Dashboard;
