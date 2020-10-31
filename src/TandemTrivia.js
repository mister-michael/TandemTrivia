import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import SideBar from "./components/nav/SideBar";
import colors from "./modules/colors";
import QuizZone from "./QuizZone";
import QuizZone2 from "./QuizZone2";

const TandemTrivia = ({ randomTen }) => {
  console.log(randomTen);
  return (
    <>
      <div
        style={{
          height: "40px",
          width: "100vw",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{marginRight: "20px", alignSelf: "center", fontSize: "25px"}}>Tandem Trivia</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        <div>
          <div
            style={{ fontSize: "0px", marginLeft: "30px", marginTop: "10px" }}
          >
            Tandem Trivia
          </div>
          <div
            style={{
              margin: "25px",
            }}
          >
            <QuizZone2 randomTen={randomTen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TandemTrivia;
