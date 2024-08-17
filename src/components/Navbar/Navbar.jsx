import React, { useState } from "react";
import "./Navbar.css";
import LoginBox from "./LoginBox";

const Navbar = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  return (
    <div className="navbar">
      <h1>ProVital</h1>
      <ul className="nav-elements">
        <li>List your practice</li>
        <li>For Employees</li>
        <li>Courses</li>
        <li>Books</li>
        <li>Speakers</li>
        <li>Doctors</li>
        <li onClick={() => setBoxOpen(!boxOpen)}>Login/Signup</li>
        {boxOpen && <LoginBox />}
      </ul>
    </div>
  );
};

export default Navbar;
