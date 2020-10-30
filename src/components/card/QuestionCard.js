import React from "react";
import Answers from "./Answers";
import Button from "./Button";
import CardHeader from "./CardHeader";

const QuestionCard = ({
  color,
  correctAnswer,
  questionId = { id: questionId },
  incorrectAnswers,
  next,
  question,
}) => {
  return (
    <>
      <div id={`container-${questionId}`} style={{ display: "block" }}>
        <CardHeader color={color} question={question} />
        <div style={{ padding: "5%" }}>
          <Answers
            incorrectAnswers={incorrectAnswers}
            correctAnswer={correctAnswer}
          />
        </div>

        <Button name={"submit"} />

        <Button
          buttonId={questionId}
          name="next"
          handleFunction={next}
        >
          next
        </Button>
      </div>
    </>
  );
};

export default QuestionCard;
