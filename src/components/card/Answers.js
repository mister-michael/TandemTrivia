import React, { useEffect } from "react";
import colors from "../../modules/colors";

import mixItUp from "../../modules/mixItUp";
import Button from "./Button";

const Answers = ({
  incorrectAnswers,
  correctAnswer,
  bgColor,
  fontColor,
  updateScore,
  buttonId,
  name,
  handleFunction,
}) => {
  const answerArray = [correctAnswer];

  for (let i = 0; i < incorrectAnswers.length; i++)
    answerArray.push(incorrectAnswers[i]);

  const shuffledArray = mixItUp(answerArray);

  let isCorrect = false;

  const submitAnswer = (e) => {
    const yourAnswer = document.getElementById(`${e.target.id}`);
    yourAnswer.style.color = "red";

    const theCorrectAnswer = document.getElementById(`${correctAnswer}`);
    theCorrectAnswer.style.backgroundColor = bgColor;
    theCorrectAnswer.style.color = "white";
    theCorrectAnswer.style.borderColor = "gold";
    theCorrectAnswer.style.borderWidth = "2px";
    theCorrectAnswer.style.borderStyle = "solid";

    theCorrectAnswer.style.fontWeight = "bold";

    if (
      bgColor === colors.yellow ||
      bgColor === colors.lightGreen ||
      bgColor === colors.green ||
      bgColor === colors.cyan 
    )
      theCorrectAnswer.style.color = colors.black;

    if (e.target.id === correctAnswer) {
      isCorrect = true;
    }
  };

  const showButton = () => {
    const getButton = document.getElementById(`button-div-${buttonId}`);
    getButton.style.display = "flex";
  };

  const nextQuestion = () => {
    if (isCorrect === true) updateScore();
    handleFunction();
  };

  useEffect(() => {
    if (buttonId === "0" || buttonId === "11") {
      const getButton = document.getElementById(`button-div-${buttonId}`);
      getButton.style.display = "block";
    }
  }, []);
  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {shuffledArray.map((res) => (
          <>
            <div
            
              key={`answer--${res}`}
              style={{
                backgroundColor: "lightgray",
                margin: "4px",
                padding: "10px",
                paddingTop: "10px",
                marginTop: "20px",
                paddingLeft: "20px",
                width: "40%",
                cursor: "pointer",
                fontWeight: "bold",
                justifyContent: "center",
                borderRadius: "5px"
              }}
              id={res}
              onClick={(e) => {
                showButton();
                submitAnswer(e);
              }}
            >
              {res}
            </div>
          </>
        ))}
      </div>
      <div id={`button-div-${buttonId}`} style={{ display: "none", marginTop: "20px", marginLeft: "400px" }}>
        <Button
          name={name}
          buttonId={buttonId}
          name="next"
          handleFunction={nextQuestion}
          bgColor={bgColor}
          fontColor={fontColor}
        >
          next
        </Button>
      </div>
    </>
  );
};

export default Answers;
