import React from "react";

import colors from "../../modules/colors";

const CircleIcon = ({ number, fontSize = "30px"}) => {
  return (
    <div
      style={{
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        height: "2vh",
        justifyContent: "center",
        padding: "5%",
        width: "2vh",
      }}
    >
      <div
        style={{ alignSelf: "center", fontWeight: "normal", color: colors.gray, fontSize: fontSize }}
      >
        {number}
      </div>
    </div>
  );
};

export default CircleIcon;
