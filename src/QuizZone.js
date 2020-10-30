import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

const QuizZone = ({ randomTen }) => {

  const next = (e) => {
    const splitId = parseInt(e.target.id.split("--")[1])
    const containerToHide = document.getElementById(`div-${splitId}`);

    if (containerToHide !== undefined) {
        containerToHide.style.display = "none";

        const containerToShow = document.getElementById(`div-${splitId + 1}`);
        containerToShow.style.display = "block";
    }
};

  return (
    <div>
      {randomTen && (
        <>
          <div id="div-1" style={{display: "block"}}>
            <QuestionCard
              questionId="1"
              color={"#FD7676"}
              question={randomTen[0].question}
              incorrectAnswers={randomTen[0].incorrect}
              correctAnswer={randomTen[0].correct}
              next={next}
            />
          </div>
          <div id="div-2" style={{display: "none"}}>
            <QuestionCard
              questionId="2"
              color={"#FDB776"}
              question={randomTen[1].question}
              incorrectAnswers={randomTen[1].incorrect}
              correctAnswer={randomTen[1].correct}
              next={next}
            />
          </div>
          <div id="div-3" style={{display: "none"}}>
            <QuestionCard
              questionId="3"
              color={"#FDE776"}
              question={randomTen[1].question}
              incorrectAnswers={randomTen[1].incorrect}
              correctAnswer={randomTen[1].correct}
              next={next}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuizZone;
