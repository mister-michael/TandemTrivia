import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import API from "./modules/apiManager";
import SideBar from "./components/nav/SideBar";

const TandemTrivia = (props) => {
  const [randomTen, setRandomTen] = useState(null);
  const [answers, setAnswers] = useState(["yes", "no", "maybe"]);
  const [correctAnswer, setCorrectAnswers] = useState("fuck yeah dude");

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  async function getQs() {
    await API.get().then((resp) => {
      console.log(resp);
      const shuffledResp = shuffle(resp);
      setRandomTen(shuffledResp.splice(0, 10));
    });
  }

  useEffect(() => {
    getQs();
  }, []);

  //   const getTenQuestions = async () => {

  //     setRandomTen(tenQuestions.splice(0, 10));
  //   };

  //   useEffect(() => {
  //     getTenQuestions();
  //     console.log(randomTen);
  //   }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        <div
          style={{
            margin: "5%",
          }}
        >
          <QuestionCard
            color={"black"}
            question={"Is this the question?"}
            incorrectAnswers={answers}
            correctAnswer={correctAnswer}
          />
        </div>
      </div>
    </>
  );
};

export default TandemTrivia;
