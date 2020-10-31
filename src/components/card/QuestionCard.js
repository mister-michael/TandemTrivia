import React from "react";

import Answers from "./Answers";
import CardHeader from "./CardHeader";

const QuestionCard = ({
  bgColor,
  correctAnswer,
  questionId = { questionId },
  fontColor,
  incorrectAnswers,
  next,
  question,
  scoreCounter,
  updateScore,
}) => {
  return (
    <>
      <div id={`container-${questionId}`} style={{ display: "block" }}>
        <CardHeader
          bgColor={bgColor}
          fontColor={fontColor}
          question={question}
        />
        <div style={{ padding: "5%", paddingTop: "5px" }}>
          <Answers
            key={`answers--${questionId}`}
            bgColor={bgColor}
            incorrectAnswers={incorrectAnswers}
            correctAnswer={correctAnswer}
            scoreCounter={scoreCounter}
            updateScore={updateScore}
            buttonId={questionId}
            name="next"
            handleFunction={next}
          />
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
