import React from "react";

class Card extends React.Component {
  onDrag = (event, card) => {
    event.preventDefault();
    this.props.registerDraggedCard(this.props.card);
  };

  render() {
    return (
      <div
        className="card"
        draggable
        onDrag={event => this.onDrag(event, this.props.card)}
      >
        {this.props.card.text}
      </div>
    );
  }
}

export default Card;
