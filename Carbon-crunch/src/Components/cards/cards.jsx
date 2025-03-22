import React from "react";
import "./Threejscardsection.css";

const Card = ({ number, color, text }) => {
  return (
    <div className={`cards ${color}`}>
      <div className="cards-number"> {number}</div>
      <div className="cards-text"> {text}</div>
    </div>
  );
};

export default Card;
