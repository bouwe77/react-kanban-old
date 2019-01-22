import React from "react";

const Card = props => (
  <div>
    <div className="card" draggable>
      {props.card.text}
    </div>
  </div>
);

export default Card;
