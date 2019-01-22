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

  render() {
    return (
      <div className="row">
        <div class="one-third column">
          <Column
            title={CARDSTATUS.TODO}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.TODO
            )}
          />
        </div>
        <div class="one-third column">
          <Column
            title={CARDSTATUS.DOING}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.DOING
            )}
          />
        </div>
        <div class="one-third column">
          <Column
            title={CARDSTATUS.DONE}
            cards={this.state.cards.filter(
              card => card.status === CARDSTATUS.DONE
            )}
          />
        </div>
      </div>
    );
  }
}

export default Kanban;
