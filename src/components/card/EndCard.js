import React from "react";
import colors from "../../modules/colors";
import Button from "./Button";
import CardHeader from "./CardHeader";
import Score from "./Score";

const EndCard = ({ playAgain, score }) => {
  let scoreStatement = "Congrats! Your final score is...";

  if (score === 0) scoreStatement = "Oh no! Your final score is...";
  else if (score > 0 && score < 4)
    scoreStatement = "Oops! Your final score is...";
  else if (score > 4 && score < 8)
    scoreStatement = "Good job! Your final score is...";
  else if (score > 8 && score < 10)
    scoreStatement = "Wow! Your final score is...";
  else scoreStatement = "Fantastic! Your final score is...";

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
        question={scoreStatement}
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
