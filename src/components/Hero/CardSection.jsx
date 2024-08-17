import React from "react";
import { heroConstants } from "../../constant";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="card-section">
      {heroConstants.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default CardSection;
