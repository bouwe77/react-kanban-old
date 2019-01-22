import uuidv4 from "uuid/v4";
import { CARDSTATUS } from "../constants/cardStatus";

const getCards = () => {
  return [
    {
      id: uuidv4(),
      text: "Drag & Drop",
      status: CARDSTATUS.TODO
    },
    {
      id: uuidv4(),
      text: "Add card",
      status: CARDSTATUS.TODO
    },
    {
      id: uuidv4(),
      text: "Delete card",
      status: CARDSTATUS.TODO
    },
    {
      id: uuidv4(),
      text: "Edit card",
      status: CARDSTATUS.TODO
    },
    {
      id: uuidv4(),
      text: "Order cards",
      status: CARDSTATUS.TODO
    },
    {
      id: uuidv4(),
      text: "Pass data as props",
      status: CARDSTATUS.DONE
    },
    {
      id: uuidv4(),
      text: "Local state",
      status: CARDSTATUS.DONE
    },
    {
      id: uuidv4(),
      text: "Basic HTML+CSS",
      status: CARDSTATUS.DONE
    }
  ];
};

export default getCards;
