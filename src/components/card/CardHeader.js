import React from "react";

const CardHeader = ({ bgColor, fontColor = "white", question }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        padding: "40px",
        overflow: "hidden",
        maxWidth: "600px",
        fontWeight: "bold",
        fontSize: "2em"
      }}
    >
      {question}
    </div>
  );
};

export default CardHeader;
