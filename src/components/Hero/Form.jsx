import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <form action="" onClick={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="🔍 Condition, procedure, speciality..."
        />
        <input type="text" placeholder="📍City, state or pincode" />
        <input type="text" placeholder="☵ Insurance Career" />
        <input className="sub-btn" type="submit" value="🔍 Find Now " />
      </form>
    </div>
  );
};

export default Form;
