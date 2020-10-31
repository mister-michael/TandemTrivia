import React, { useEffect } from "react";

import mixItUp from "../../modules/mixItUp";
import Button from "./Button";

const Answers = ({
  incorrectAnswers,
  correctAnswer,
  bgColor,
  updateScore,
  buttonId,
  name,
  handleFunction,
}) => {
  const answerArray = [correctAnswer];

  for (let i = 0; i < incorrectAnswers.length; i++)
    answerArray.push(incorrectAnswers[i]);

  //   console.log(answerArray);
  //   console.log(mixItUp(answerArray));

  const shuffledArray = mixItUp(answerArray);

  const submitAnswer = (e) => {
    const yourAnswer = document.getElementById(`${e.target.id}`);
    yourAnswer.style.backgroundColor = bgColor;

    const theCorrectAnswer = document.getElementById(`${correctAnswer}`);
    theCorrectAnswer.style.backgroundColor = "green";
    theCorrectAnswer.style.color = "white";
    theCorrectAnswer.style.borderColor = "gold";
    theCorrectAnswer.style.borderWidth = "4px";

    if (e.target.id === correctAnswer) {
      updateScore();
    }
};

const showButton = () => {
    const getButton = document.getElementById(`button-div-${buttonId}`)
    getButton.style.display = "block"
};

useEffect(()=> {

    if (buttonId === "0" || buttonId === "11") {
        const getButton = document.getElementById(`button-div-${buttonId}`)
        getButton.style.display = "block"
        console.log(getButton)
        console.log(buttonId, "buttonId")
      }
}, [])
  return (
    <>
      {shuffledArray.map((res) => (
        <>
          <div
            key={res}
            style={{
              backgroundColor: "lightgray",
              borderColor: "black",
              borderWidth: "1px",
              borderStyle: "solid",
              margin: "4px",
              padding: "4px",
            }}
            // for={res}
            id={res}
            onClick={(e) => {
                submitAnswer(e)
                showButton()
            }}
          >
            {res}
          </div>
        </>
      ))}
      <div id={`button-div-${buttonId}`} style={{ display: "none" }}>
        <Button
          name={name}
          buttonId={buttonId}
          name="next"
          handleFunction={handleFunction}
        >
          next
        </Button>
      </div>
    </>
  );
};

export default Answers;
