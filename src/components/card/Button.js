import React from "react";

const Button = ({ name, handleFunction, buttonId }) => {
  
    return (
      <>
        <button
          style={{ display: "block" }}
          id={`${name}--${buttonId}`}
          onClick={(e) => {
            handleFunction(e);
          }}
        >
          {name}
        </button>
      </>
    );
};

export default Button;
