import React from "react";
import "./Hero.css";
import ImageSection from "./ImageSection";
import SixPillars from "./SixPillars";
import CardSection from "./CardSection";

const Hero = () => {
  return (
    <div className="">
      <div className="container">
        <ImageSection />
        <div className="heading">
          <h1>
            Book an appointment with <br />{" "}
            <span className="highlight">lifestyle medicine</span> experts{" "}
          </h1>
          <p>{"Optimize your lifestyle and reverse chronic diseases."}</p>
        </div>
      </div>
      <hr className="hr-inclined"/>
      <SixPillars />
    </div>
  );
};

export default Hero;
