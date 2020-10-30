import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

const QuizZone = ({ randomTen }) => {
  const [visibleTab, setVisibleTab] = useState("0");

  useEffect(() => {}, []);

  return (
    <div>
      {randomTen && (
        <>
            <QuestionCard
              id="1"
              visibility={"visible"}
              color={"black"}
              question={randomTen[0].question}
              incorrectAnswers={randomTen[0].incorrect}
              correctAnswer={randomTen[0].correct}
            />
            <QuestionCard
              id="2"
              visibility={"hidden"}
              color={"black"}
              question={randomTen[1].question}
              incorrectAnswers={randomTen[1].incorrect}
              correctAnswer={randomTen[1].correct}
            />
        </>
      )}
    </div>
  );
};

export default QuizZone;
