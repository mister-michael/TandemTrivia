import React from "react";

const Answers = ({incorrectAnswers, correctAnswer}) => {
  return (
    <>
      <div>{incorrectAnswers[1]}</div>
      <div>{incorrectAnswers[0]}</div>
      <div>{incorrectAnswers[2]}</div>
      <div>{correctAnswer}</div>
    </>
  );
};

export default Answers;
