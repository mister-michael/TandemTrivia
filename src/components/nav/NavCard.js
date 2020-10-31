import React from "react";

import CircleIcon from "./CircleIcon";

const NavCard = ({ color, number }) => {
  return (
    <div
      style={{
        minWidth: "200px",
        backgroundColor: color,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "5%",
        height: "3vh"
      }}
    >
      <CircleIcon number={number} style={{ padding: "5%" }} />
    </div>
  );
};

export default NavCard;
