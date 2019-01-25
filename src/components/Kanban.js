import React from "react";

import Column from "./Column";
import { CARDSTATUS } from "../constants/cardStatus";
import getCards from "../data/getCards";

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: getCards(),
      draggedCard: {}
    };
  }

  registerDraggedCard(draggedCard) {
    // this.setState({
    //   draggedCard: draggedCard
    // });
    console.log(draggedCard);
  }

  cardDroppedOnColumn(columnTitle) {
    console.log("ja hiero");
    console.log(columnTitle);
  }

  render() {
    return (
      <div className="row">
        <div className="one-third column">
          <Column
            title={CARDSTATUS.TODO}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.TODO
            )}
            cardDroppedOnColumn={this.cardDroppedOnColumn}
            registerDraggedCard={this.registerDraggedCard}
          />
        </div>
        <div className="one-third column">
          <Column
            title={CARDSTATUS.DOING}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.DOING
            )}
            registerDraggedCard={this.registerDraggedCard}
          />
        </div>
        <div className="one-third column">
          <Column
            title={CARDSTATUS.DONE}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.DONE
            )}
            registerDraggedCard={this.registerDraggedCard}
          />
        </div>
      </div>
    );
  }
}

export default Kanban;
