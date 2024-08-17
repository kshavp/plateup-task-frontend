import React from "react";

const LoginBox = () => {
  return (
    <div className="login-box">
      <span className="role">
        <p>Doctor</p>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </span>
      <hr />
      <span className="role">
        <p>Patient</p>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </span>
    </div>
  );
};

export default LoginBox;
