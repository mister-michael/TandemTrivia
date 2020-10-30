import React, { useEffect, useState } from "react";
import QuestionCard from "./components/card/QuestionCard";

import SideBar from "./components/nav/SideBar";
import QuizZone from "./QuizZone";

const TandemTrivia = ({ randomTen }) => {
  const [currentTab, setCurrentTab] = useState();
  const [lastTab, setLastTab] = useState();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          lastTab={lastTab}
          setLastTab={setLastTab}
        />
        <div
          style={{
            margin: "5%",
          }}
        >
          <QuizZone randomTen={randomTen} />
          
        </div>
      </div>
    </>
  );
};

export default TandemTrivia;
