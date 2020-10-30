import React from "react";

const CardHeader = ({ bgColor, fontColor, question }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        padding: "10%",
        overflow: "hidden",
      }}
    >
      {question}
    </div>
  );
};

export default CardHeader;
