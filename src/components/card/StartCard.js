import React from "react";
import colors from "../../modules/colors";
import Button from "./Button";
import CardHeader from "./CardHeader";

const StartCard = ({ next }) => {
  const correctAnswer = "Yes Indeedy Do";

  const answers = [
    "Most definitely",
    "Assuredly",
    "Yes Indeedy Do",
    "Totes McGotes",
  ];

  const showButton = () => {
    document.getElementById("start-button").style.display = "block";
  };

  const submitAnswer = (e) => {
    document.getElementById(`${e.target.id}`).style.backgroundColor =
      colors.black;
    document.getElementById(`${e.target.id}`).style.color = "white";

    document.getElementById(`${correctAnswer}`).style.backgroundColor = "green";
    document.getElementById(`${correctAnswer}`).style.color = "white";
    document.getElementById(`${correctAnswer}`).style.borderColor = "gold";
    document.getElementById(`${correctAnswer}`).style.borderWidth = "4px";
  };
  return (
    <>
      <div>
        <div
          style={{
            fontSize: "16px",
            fontStyle: "italic",
            marginBottom: "20px",
            padding: "0px 10px",
          }}
        >
          <div>
            Welcome to Tandem Trivia. Correct answers will appear in Green. This
            is a practice question. The next ten questions are the real deal,
            Ally McBeal.{" "}
          </div>
          <div>
              
          </div>
        </div>
        <CardHeader
          bgColor={colors.black}
          fontColor={"white"}
          question={"Should you click on a gray box to answer a question?"}
        />
        <>
          {answers.map((res) => (
            <div
              key={"res"}
              style={{
                backgroundColor: "lightgray",
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                margin: "4px",
                padding: "4px",
              }}
              // for={res}
              id={res}
              onClick={(e) => {
                showButton();
                submitAnswer(e);
              }}
            >
              {res}
            </div>
          ))}
        </>

        <div id="start-button" style={{ display: "none" }}>
          <Button name="start" buttonId={"0"} handleFunction={next} />
        </div>
      </div>
    </>
  );
};

export default StartCard;
