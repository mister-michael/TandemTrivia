import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import logo from "./assets/TandemTriviaLogo30px.png";

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
        <div
          style={{
            marginRight: "20px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            fontSize: "25px",
          }}
        >
          <img
            style={{ margin: "0px 5px" }}
            src={logo}
            height="20px"
            marginLeft="5px"
          />
          Tandem Trivia
        </div>
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
            style={{
              margin: "25px",
            }}
          >
            <QuizZone2 randomTen={randomTen} />
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "3vh",
          }}
        ></div>
      </div>
    </>
  );
};

export default TandemTrivia;
