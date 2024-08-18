import React, { useState } from "react";
import "./Navbar.css";
import LoginBox from "./LoginBox";
import logo from '../../assets/logo.svg'
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-elements-desk">
        <li>List your practice</li>
        <li>For Employees</li>
        <li>Courses</li>
        <li>Books</li>
        <li>Speakers</li>
        <li>Doctors</li>
        <li onClick={() => setBoxOpen(!boxOpen)}>Login/Signup</li>
        {boxOpen && <LoginBox />}
      </ul>
      <button className="ham-btn" onClick={()=>{setSidebar(!sidebar)}}>{sidebar ? "⨉" : "☰"}</button>
      {sidebar && <Sidebar />}
    </div>
  );
};

export default Navbar;
