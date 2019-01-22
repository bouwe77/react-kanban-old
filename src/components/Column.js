import React from "react";

import Card from "./Card";

const Column = props => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <h1>{props.title}</h1>
      </div>
      <div className="kanban-column-cards">
        {props.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
