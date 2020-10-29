import React from "react";

const CardHeader = ({ color, question }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10%",
        overflow: "hidden",
      }}
    >
      {question}
    </div>
  );
};

export default CardHeader;
