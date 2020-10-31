import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import SideBar from "./components/nav/SideBar";
import QuizZone from "./QuizZone";
import QuizZone2 from "./QuizZone2";

const TandemTrivia = ({ randomTen }) => {
console.log(randomTen)
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
            margin: "45px",
          }}
        >
          <QuizZone2 randomTen={randomTen} />
          
        </div>
      </div>
    </>
  );
};

export default TandemTrivia;
