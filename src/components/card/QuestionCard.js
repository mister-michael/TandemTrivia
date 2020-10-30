import React from "react";
import Answers from "./Answers";
import Button from "./Button";
import CardHeader from "./CardHeader";

const QuestionCard = ({
  color,
  correctAnswer,
  id = { id },
  incorrectAnswers,
  question,
  visibility = "none",
}) => {


  const next = (e) => {
      const getContainer = document.getElementById(`container-${e.target.id}`)
      getContainer.style.display = "none"
      console.log(getContainer)
  };

  return (
    <>
      <div id={`container-${id}`} style={{ display: "block" }}>
        <CardHeader color={color} question={question} />
        <div style={{ padding: "5%" }}>
          <Answers
            incorrectAnswers={incorrectAnswers}
            correctAnswer={correctAnswer}
          />
        </div>
        <Button name={"submit"} />
        <button
          id={id}
          type="next"
          onClick={(e) => {
            console.log("clicked next");
            next(e);
          }}
        >
          next{" "}
        </button>
      </div>
    </>
  );
};

export default QuestionCard;
