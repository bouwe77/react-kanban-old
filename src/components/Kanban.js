import React from "react";

import Column from "./Column";

const Kanban = () => {
  return (
    <div className="row">
      <div className="one-third column">
        <Column title="TODO" />
      </div>
      <div className="one-third column">
        <Column title="DOING" />
      </div>
      <div className="one-third column">
        <Column title="DONE" />
      </div>
    </div>
  );
};

export default Kanban;
