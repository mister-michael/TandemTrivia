import React from "react";
import Answers from "./Answers";
import Button from "./Button";
import CardHeader from "./CardHeader";

const QuestionCard = ({ color, question, incorrectAnswers, correctAnswer }) => {
  return (
    <>
      <CardHeader color={color} question={question} />
      <div style={{ padding: "5%" }}>
        <Answers
          incorrectAnswers={incorrectAnswers}
          correctAnswer={correctAnswer}
        />
      </div>
      <Button name={"submit"} />
    </>
  );
};

export default QuestionCard;
