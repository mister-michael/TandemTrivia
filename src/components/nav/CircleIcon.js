import React from "react";

import colors from "../../modules/colors";

const CircleIcon = ({ number }) => {
  return (
    <div
      style={{
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        height: "3vh",
        justifyContent: "center",
        padding: "5%",
        width: "3vh",
      }}
    >
      <div
        style={{ alignSelf: "center", fontWeight: "bold", color: colors.black }}
      >
        {number}
      </div>
    </div>
  );
};

export default CircleIcon;
