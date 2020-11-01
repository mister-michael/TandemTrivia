import React from "react";
import colors from "../../modules/colors";
import Button from "./Button";
import CardHeader from "./CardHeader";
import Score from "./Score";

const EndCard = ({ playAgain, score }) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div
      style={{
        fontSize: "16px",
        fontStyle: "italic",
        marginBottom: "20px",
        padding: "0px 10px",
        borderRadius: "20px",
            overflow: "hidden",
            borderColor: colors.black,
            borderWidth: "3px",
            borderStyle: "solid",
      }}
    >
      <CardHeader
        bgColor={""}
        fontColor={colors.black}
        question={"Congrats! Your final score is..."}
      />
      <Score score={score} />
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          marginLeft: "400px",
          marginBottom: "20px",
        }}
      >
        <Button
          name={"play again"}
          handleFunction={playAgain}
          bgColor={colors.black}
          fontColor={colors.white}
        />
      </div>
    </div>
  );
};

export default EndCard;
