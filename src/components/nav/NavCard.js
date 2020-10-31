import React from "react";
import CircleIcon from "./CircleIcon";

const NavCard = ({ color, number, changeTab, tab }) => {
  return (
    <div id={tab}
    onClick={evt => changeTab(evt)}
      style={{
        minWidth: "200px",
        backgroundColor: color,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "5%",
      }}
    >
      <CircleIcon number={number} style={{ padding: "5%" }} />
    </div>
  );
};

export default NavCard;
