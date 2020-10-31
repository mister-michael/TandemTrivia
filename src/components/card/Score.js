import React from "react";
import colors from "../../modules/colors";

const Score = ({ score }) => {
  return (
    <div
      style={{
        fontSize: "200px",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div style={{color: colors.red}}>{score}</div>
      <div style={{color: colors.green}}>/</div>
      <div style={{color: colors.blue}}>10</div>
    </div>
  );
};

export default Score;
