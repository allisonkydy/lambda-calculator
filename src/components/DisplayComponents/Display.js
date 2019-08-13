import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      <div className="display-value">{props.displayValue}</div>
    </div>
  );
};

export default Display;
