import React from "react";

import Card from "./Card";

class Column extends React.Component {
  onDragOver = event => {
    event.preventDefault();
  };
  onDrop = event => {
    console.log("ja drop");
    //TODO moet deze erbij? in het voorbeeld niet ... event.preventDefault();
    this.props.cardDroppedOnColumn(this.props.title);
  };

  render() {
    return (
      <div
        className="kanban-column"
        onDrop={event => this.onDrop(event)}
        onDragOver={event => this.onDragOver(event)}
      >
        <div className="kanban-column-header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="kanban-column-cards">
          {this.props.cards.map(card => (
            <Card
              key={card.id}
              card={card}
              registerDraggedCard={this.props.registerDraggedCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Column;
