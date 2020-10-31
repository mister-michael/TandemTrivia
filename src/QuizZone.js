import React, { useEffect, useState } from "react";

import colors from "./modules/colors";
import QuestionCard from "./components/card/QuestionCard";
import StartScreen from "./components/card/StartScreen";

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
    <div style={{
      maxWidth: "400px"
    }}>
      {randomTen && (
        <>
          <div id="div-0" style={{ display: "block" }}>
            <StartScreen next={next} />
          </div>
          {/* <div id="div-0" style={{ display: "block" }}>
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
          </div> */}
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
              fontColor={colors.black}
              question={randomTen[2].question}
              incorrectAnswers={randomTen[2].incorrect}
              correctAnswer={randomTen[2].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-4" style={{ display: "none" }}>
            <QuestionCard
              fontColor={colors.black}
              questionId="4"
              bgColor={colors.lightGreen}
              question={randomTen[3].question}
              incorrectAnswers={randomTen[3].incorrect}
              correctAnswer={randomTen[3].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-5" style={{ display: "none" }}>
            <QuestionCard
              questionId="5"
              fontColor={colors.black}
              bgColor={colors.green}
              question={randomTen[4].question}
              incorrectAnswers={randomTen[4].incorrect}
              correctAnswer={randomTen[4].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-6" style={{ display: "none" }}>
            <QuestionCard
              questionId="6"
              fontColor={colors.black}
              bgColor={colors.cyan}
              question={randomTen[5].question}
              incorrectAnswers={randomTen[5].incorrect}
              correctAnswer={randomTen[5].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-7" style={{ display: "none" }}>
            <QuestionCard
              questionId="7"
              bgColor={colors.lightBlue}
              question={randomTen[6].question}
              incorrectAnswers={randomTen[6].incorrect}
              correctAnswer={randomTen[6].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-8" style={{ display: "none" }}>
            <QuestionCard
              questionId="8"
              bgColor={colors.blue}
              question={randomTen[7].question}
              incorrectAnswers={randomTen[7].incorrect}
              correctAnswer={randomTen[7].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-9" style={{ display: "none" }}>
            <QuestionCard
              questionId="9"
              bgColor={colors.violet}
              question={randomTen[8].question}
              incorrectAnswers={randomTen[8].incorrect}
              correctAnswer={randomTen[8].correct}
              next={next}
              updateScore={updateScore}
            />
          </div>
          <div id="div-10" style={{ display: "none" }}>
            <QuestionCard
              questionId="10"
              bgColor={colors.magenta}
              question={randomTen[9].question}
              incorrectAnswers={randomTen[9].incorrect}
              correctAnswer={randomTen[9].correct}
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
