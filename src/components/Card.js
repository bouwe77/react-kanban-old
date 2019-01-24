import React from "react";

const Card = props => (
  <div className="card" draggable>
    {props.card.text}
  </div>
);

export default Card;
