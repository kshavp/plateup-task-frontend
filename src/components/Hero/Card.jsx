import React from "react";
import CardBadge from "./CardBadge";

const Card = ({item}) => {
  return (
    <div className="card">
      <img src={item.img} alt={item.heading} className="card-img" />
      <div style={{padding:'1rem'}}>
        <p className="card-heading">{item.heading}</p>
        <p className="card-body">{item.context}</p>
      </div>
      <CardBadge quant={item.quant} unit={item.unit} icon={item.icon}/>
    </div>
  );
};

export default Card;
