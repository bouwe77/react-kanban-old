import React from "react";

const Column = props => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Column;
