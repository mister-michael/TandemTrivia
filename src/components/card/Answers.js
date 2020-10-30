import React from "react";

import mixItUp from "../../modules/mixItUp";

const Answers = ({ incorrectAnswers, correctAnswer }) => {
  const answerArray = [
    incorrectAnswers[1],
    incorrectAnswers[0],
    incorrectAnswers[2],
    correctAnswer,
  ];

  console.log(answerArray);
  console.log(mixItUp(answerArray));

  const shuffledArray = mixItUp(answerArray);

  return (
    <>
      {shuffledArray.map((res) => (
        <div key={res}>{res}</div>
      ))}
    </>
  );
};

export default Answers;
