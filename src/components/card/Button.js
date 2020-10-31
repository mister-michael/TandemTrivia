import React from "react";
import colors from "../../modules/colors";

const Button = ({ name, handleFunction, buttonId, bgColor, fontColor }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: bgColor,
          width: "80px",
          justifyContent: "center",
          padding: "15px",
          borderRadius: "51px",
          color: fontColor,
          fontWeight: "bold",
          cursor: "pointer"
        }}
        id={`${name}--${buttonId}`}
        onClick={(e) => {
          handleFunction(e);
        }}
      >
        {name}
      </div>
    </>
  );
};

export default Button;
