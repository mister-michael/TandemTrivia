import React from "react";

import colors from "../../modules/colors";
import ContactInfo from "./ContactInfo";
import NavCard from "./NavCard";

const SideBar = () => {
  return (
    <div
      style={{
        width: "25%",
        backgroundColor: "black",
        maxWidth: "300px",
        minHeight: "800px",
        height: "100vh",
      }}
    >
      <NavCard key={"NavCardTab0"} color={colors.black} number={"?"} />
      <NavCard key={"NavCardTab1"} color={colors.red} number={"1"} />
      <NavCard key={"NavCardTab2"} color={colors.orange} number={"2"} />
      <NavCard key={"NavCardTab3"} color={colors.yellow} number={"3"} />
      <NavCard key={"NavCardTab4"} color={colors.lightGreen} number={"4"} />
      <NavCard key={"NavCardTab5"} color={colors.green} number={"5"} />
      <NavCard key={"NavCardTab6"} color={colors.cyan} number={"6"} />
      <NavCard key={"NavCardTab7"} color={colors.lightBlue} number={"7"} />
      <NavCard key={"NavCardTab8"} color={colors.blue} number={"8"} />
      <NavCard key={"NavCardTab9"} color={colors.violet} number={"9"} />
      <NavCard key={"NavCardTab10"} color={colors.magenta} number={"10"} />
      <NavCard key={"NavCardTab11"} color={colors.black} number={"!"} />
      <ContactInfo />
    </div>
  );
};

export default SideBar;
