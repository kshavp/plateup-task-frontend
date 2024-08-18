import React, { useState } from "react";
import LoginBox from "./LoginBox";

const Sidebar = () => {
  const [boxOpen, setBoxOpen] = useState(false);
  return (
    <div className="sidebar">
      <ul className="nav-elements-mobile">
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

export default Sidebar;
