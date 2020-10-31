import React, { useEffect, useState } from "react";

import colors from "./modules/colors";
import EndCard from "./components/card/EndCard";
import QuestionCard from "./components/card/QuestionCard";
import StartCard from "./components/card/StartCard";

const QuizZone = ({ randomTen = null }) => {
  const [questionObject, setQuestionObject] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);

  useEffect(() => {
    if (randomTen) setQuestionObject(randomTen[questionNumber]);
  }, [randomTen]);

  const colorArray = [
    [colors.red, colors.white],
    [colors.orange, colors.white],
    [colors.yellow, colors.black],
    [colors.lightGreen, colors.black],
    [colors.green, colors.black],
    [colors.cyan, colors.black],
    [colors.lightBlue, colors.white],
    [colors.blue, colors.white],
    [colors.violet, colors.white],
    [colors.magenta, colors.white],
  ];

  const startQuiz = () => {
    document.getElementById("div-0").style.display = "none";

    document.getElementById("div-1").style.display = "block";
  };

  const next = () => {
    if (questionNumber !== 9) {
      setQuestionObject(randomTen[questionNumber + 1]);
      setQuestionNumber(questionNumber + 1);
    } else {
      document.getElementById("div-1").style.display = "none";
      document.getElementById("div-3").style.display = "block";
    }
  };

  const updateScore = () => {
    setScoreCount(scoreCount + 1);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "600px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginLeft: "10px",
        }}
      >
        <div id="div-0" style={{ display: "block" }}>
          <StartCard next={startQuiz} />
        </div>

        {questionObject && (
          <div id="div-1" style={{ display: "none" }}>
            <QuestionCard
              bgColor={colorArray[questionNumber][0]}
              correctAnswer={questionObject.correct}
              key={`questionCard--${questionNumber}`}
              fontColor={colorArray[questionNumber][1]}
              incorrectAnswers={questionObject.incorrect}
              next={next}
              question={questionObject.question}
              questionId={questionNumber}
              updateScore={updateScore}
            />
          </div>
        )}

        <div id="div-3" style={{ display: "none" }}>
          <EndCard score={scoreCount} />
        </div>
      </div>
    </>
  );
};

export default QuizZone;
