import React from 'react';

import logo from '../../assets/TandemTriviaLogo30px.png'

const Header = () => {
    return (
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
          />
          Tandem Trivia
        </div>
      </div>
    );
};

export default Header;