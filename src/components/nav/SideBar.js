import React from "react";

import colors from '../../modules/colors';
import NavCard from "./NavCard";

const SideBar = () => {

  return (
    <div style={{ width: "25%", backgroundColor: "black", maxWidth: "300px" }}>
      <NavCard key={"NavCardTab0"} tab={"0"} color={colors.black} number={"?"} />
      <NavCard key={"NavCardTab1"} tab={"1"} color={colors.red} number={"1"} />
      <NavCard key={"NavCardTab2"} tab={"2"} color={colors.orange} number={"2"} />
      <NavCard key={"NavCardTab3"} tab={"3"} color={colors.yellow} number={"3"} />
      <NavCard key={"NavCardTab4"} tab={"4"} color={colors.lightGreen} number={"4"} />
      <NavCard key={"NavCardTab5"} tab={"5"} color={colors.green} number={"5"} />
      <NavCard key={"NavCardTab6"} tab={"6"} color={colors.cyan} number={"6"} />
      <NavCard key={"NavCardTab7"} tab={"7"} color={colors.lightBlue} number={"7"} />
      <NavCard key={"NavCardTab8"} tab={"8"} color={colors.blue} number={"8"} />
      <NavCard key={"NavCardTab9"} tab={"9"} color={colors.violet} number={"9"} />
      <NavCard key={"NavCardTab10"} tab={"10"} color={colors.magenta} number={"10"} />
      <NavCard key={"NavCardTab11"} tab={"11"} color={colors.lightGray} number={"!"} />
    </div>
  );
};

export default SideBar;
