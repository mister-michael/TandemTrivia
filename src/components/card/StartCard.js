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
    const yourAnswer = document.getElementById(`${e.target.id}`);
    yourAnswer.style.color = "red";

    const theCorrectAnswer = document.getElementById(`${correctAnswer}`);
    theCorrectAnswer.style.backgroundColor = colors.black;
    theCorrectAnswer.style.color = "white";
    theCorrectAnswer.style.outlineColor = "gold";
    theCorrectAnswer.style.outlineWidth = "2px";
    theCorrectAnswer.style.outlineStyle = "solid";
    theCorrectAnswer.style.borderWidth = "0px";

    theCorrectAnswer.style.fontWeight = "bold";
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
          <div></div>
        </div>
        <CardHeader
          bgColor={colors.black}
          fontColor={"white"}
          question={"Should you click on a gray box to answer a question?"}
        />
        <>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {answers.map((res) => (
              <div
                key={"res"}
                style={{
                  backgroundColor: "lightgray",
                  borderColor: "black",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  margin: "4px",
                  padding: "10px",
                  paddingTop: "10px",
                  marginTop: "20px",
                  paddingLeft: "20px",
                  width: "40%",
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
          </div>
        </>

        <div id="start-button" style={{ display: "none" }}>
          <Button name="start" buttonId={"0"} handleFunction={next} />
        </div>
      </div>
    </>
  );
};

export default StartCard;
