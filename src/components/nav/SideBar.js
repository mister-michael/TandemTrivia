import React from "react";

import NavCard from "./NavCard";

const SideBar = ({ currentTab, setCurrentTab, lastTab, setLastTab }) => {

  const changeTab = (evt) => {
    const tabNumber = document.getElementById(`${evt.target.id}`);
    console.log(evt.target.id)
  };

  return (
    <div style={{ width: "25%", backgroundColor: "black" }}>
      <NavCard tab={"0"} color={"#474242"} number={"?"} changeTab={changeTab}/>
      <NavCard tab={"1"} color={"#FD7676"} number={"1"} changeTab={changeTab}/>
      <NavCard tab={"2"} color={"#FDB776"} number={"2"} changeTab={changeTab}/>
      <NavCard tab={"3"} color={"#FDE776"} number={"3"} />
      <NavCard tab={"4"} color={"#C2FD76"} number={"4"} />
      <NavCard tab={"5"} color={"#89FD76"} number={"5"} />
      <NavCard tab={"6"} color={"#76FDED"} number={"6"} />
      <NavCard tab={"7"} color={"#76CCFD"} number={"7"} />
      <NavCard tab={"8"} color={"#7683FD"} number={"8"} />
      <NavCard tab={"9"} color={"#B542FC"} number={"9"} />
      <NavCard tab={"10"} color={"#F842FC"} number={"10"} />
      <NavCard tab={"11"} color={"#E8DBE9"} number={"!"} />
    </div>
  );
};

export default SideBar;
