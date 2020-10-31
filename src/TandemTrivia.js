import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import SideBar from "./components/nav/SideBar";
import QuizZone from "./QuizZone";

const TandemTrivia = ({ randomTen }) => {

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
          <QuizZone randomTen={randomTen} />
          
        </div>
      </div>
    </>
  );
};

export default TandemTrivia;
