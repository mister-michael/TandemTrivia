import React from "react";

import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import QuizZone from "./QuizZone";
import SideBar from "./components/nav/SideBar";

const TandemTrivia = ({ getQs, randomTen }) => {
  return (
    <>
      <Header key={"header"} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar key={"sidebar"} />
        <div>
          <div style={{ margin: "25px" }}>
            <QuizZone getQs={getQs} key={"QuizZone"} randomTen={randomTen} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TandemTrivia;
