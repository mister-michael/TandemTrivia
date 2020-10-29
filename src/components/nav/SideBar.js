import React from 'react';

import NavCard from "./NavCard";


const SideBar = () => {
    return (
        //NavCards
        <div style={{width: "25%", backgroundColor: "black"}}>
            <NavCard color={"#474242"} number={"?"} />
            <NavCard color={"#FD7676"} number={"1"} />
            <NavCard color={"#FDB776"} number={"2"} />
            <NavCard color={"#FDE776"} number={"3"} />
            <NavCard color={"#C2FD76"} number={"4"} />
            <NavCard color={"#89FD76"} number={"5"} />
            <NavCard color={"#76FDED"} number={"6"} />
            <NavCard color={"#76CCFD"} number={"7"} />
            <NavCard color={"#7683FD"} number={"8"} />
            <NavCard color={"#B542FC"} number={"9"} />
            <NavCard color={"#F842FC"} number={"10"} />
            <NavCard color={"#E8DBE9"} number={"!"} />
        </div>
    );
};

export default SideBar;