import React, { useEffect, useState } from "react";

import colors from "./modules/colors";
import QuestionCard from "./components/card/QuestionCard";

const QuizZone = ({ randomTen }) => {
  let scoreCounter = 0;

  const next = (e) => {
    const splitId = parseInt(e.target.id.split("--")[1]);
    const containerToHide = document.getElementById(`div-${splitId}`);

    if (containerToHide !== undefined) {
      containerToHide.style.display = "none";

      const containerToShow = document.getElementById(`div-${splitId + 1}`);
      containerToShow.style.display = "block";
    }
  };

  const updateScore = () => {
    scoreCounter += 1;
    console.log("score: ", scoreCounter);
  };

  return (
    <div>
      {randomTen && (
        <>
          <div id="div-0" style={{ display: "block" }}>
            <QuestionCard
              display="true"
              questionId="0"
              bgColor={colors.black}
              fontColor={"white"}
              question={"Click Next to Begin Your Quiz"}
              incorrectAnswers={""}
              correctAnswer={""}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-1" style={{ display: "none" }}>
            <QuestionCard
              questionId="1"
              bgColor={colors.red}
              fontColor={"white"}
              question={randomTen[0].question}
              incorrectAnswers={randomTen[0].incorrect}
              correctAnswer={randomTen[0].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-2" style={{ display: "none" }}>
            <QuestionCard
              questionId="2"
              bgColor={colors.orange}
              fontColor={"white"}
              question={randomTen[1].question}
              incorrectAnswers={randomTen[1].incorrect}
              correctAnswer={randomTen[1].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-3" style={{ display: "none" }}>
            <QuestionCard
              questionId="3"
              bgColor={colors.yellow}
              question={randomTen[2].question}
              incorrectAnswers={randomTen[2].incorrect}
              correctAnswer={randomTen[2].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuizZone;
