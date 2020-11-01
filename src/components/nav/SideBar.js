import React, { useEffect, useState } from "react";

import colors from "../../modules/colors";
import ContactInfo from "./ContactInfo";
import NavCard from "./NavCard";

const SideBar = ({ questionNumber }) => {
  const [n, setN] = useState(0);

  const changeOpacity = () => {
    if (questionNumber === n && questionNumber > -1) {
      console.log("In IT BABY");
      setN(n + 1);
      document.getElementById(`NavCard${n - 1}`).style.opacity = "40%";
      document.getElementById(`NavCard${n}`).style.opacity = "100%";
    }
  };

  useEffect(() => {
    changeOpacity();
    console.log("XXXXXXXXXX")
  }, [questionNumber]);

  return (
    <div
      style={{
        width: "25%",
        backgroundColor: "black",
        maxWidth: "900px",
        minHeight: "800px",
        height: "100vh",
      }}
    >
      <div id="NavCard0" style={{ opacity: "100%" }}>
        <NavCard
          dog={0}
          questionNumber={questionNumber}
          className="NavCard--0"
          key={"NavCardTab0"}
          color={colors.black}
          number={"?"}
          fontSize={"35px"}
          opacity="100%"
        />
      </div>
      <div id="NavCard1" style={{ opacity: "40%" }}>
        <NavCard
          dog={1}
          questionNumber={questionNumber}
          className="NavCard--1"
          key={"NavCardTab1"}
          color={colors.red}
          number={"1"}
          opacity="40%"
        />
      </div>
      <div id="NavCard2" style={{ opacity: "40%" }}>
        <NavCard
          dog={2}
          questionNumber={questionNumber}
          className="NavCard--2"
          key={"NavCardTab2"}
          color={colors.orange}
          number={"2"}
          opacity="40%"
        />
      </div>
      <div id="NavCard3" style={{ opacity: "40%" }}>
        <NavCard
          dog={3}
          questionNumber={questionNumber}
          className="NavCard--3"
          key={"NavCardTab3"}
          color={colors.yellow}
          number={"3"}
        />
        <div id="NavCard4" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={4}
          questionNumber={questionNumber}
          className="NavCard--4"
          key={"NavCardTab4"}
          color={colors.lightGreen}
          number={"4"}
        />
        <div id="NavCard5" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={5}
          questionNumber={questionNumber}
          className="NavCard--5"
          key={"NavCardTab5"}
          color={colors.green}
          number={"5"}
        />
        <div id="NavCard6" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={6}
          questionNumber={questionNumber}
          className="NavCard--6"
          key={"NavCardTab6"}
          color={colors.cyan}
          number={"6"}
        />
        <div id="NavCard7" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={7}
          questionNumber={questionNumber}
          className="NavCard--7"
          key={"NavCardTab7"}
          color={colors.lightBlue}
          number={"7"}
        />
        <div id="NavCard8" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={8}
          questionNumber={questionNumber}
          className="NavCard--8"
          key={"NavCardTab8"}
          color={colors.blue}
          number={"8"}
        />
        <div id="NavCard9" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={9}
          questionNumber={questionNumber}
          className="NavCard--9"
          key={"NavCardTab9"}
          color={colors.violet}
          number={"9"}
        />
        <div id="NavCard10" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={10}
          questionNumber={questionNumber}
          className="NavCard--10"
          key={"NavCardTab10"}
          color={colors.magenta}
          number={"10"}
        />
        <div id="NavCard11" style={{ opacity: "40%" }}></div>
        <NavCard
          dog={11}
          questionNumber={questionNumber}
          className="NavCard--11"
          key={"NavCardTab11"}
          color={colors.black}
          number={"!"}
          fontSize={"40px"}
        />
      </div>
      <ContactInfo />
    </div>
  );
};

export default SideBar;
