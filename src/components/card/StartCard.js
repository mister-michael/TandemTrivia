import React from "react";
import colors from "../../modules/colors";
import mixItUp from "../../modules/mixItUp";
import Button from "./Button";
import CardHeader from "./CardHeader";

const StartCard = ({ next }) => {
  const correctAnswer = "Yes Indeedy Do";

  const answers = mixItUp([
    "Most definitely",
    "Assuredly",
    "Yes Indeedy Do",
    "Totes McGotes",
  ]);
  

  const showButton = () => {
    document.getElementById("start-button").style.display = "block";
  };

  const submitAnswer = (e) => {
    const yourAnswer = document.getElementById(`${e.target.id}`);
    yourAnswer.style.color = "red";

    const theCorrectAnswer = document.getElementById(`${correctAnswer}`);
    theCorrectAnswer.style.backgroundColor = colors.black;
    theCorrectAnswer.style.color = "white";
    theCorrectAnswer.style.borderColor = "gold";
    theCorrectAnswer.style.borderWidth = "2px";
    theCorrectAnswer.style.borderStyle = "solid";

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
            lineHeight: "25px",
          }}
        >
          <div>
            Welcome to Tandem Trivia. Correct Answers will be{" "}
            <a
              style={{
                backgroundColor: colors.black,
                color: "white",
                padding: "3px",
                fontStyle: "normal",
                marginRight: "4px",
              }}
            >
              highlighted.
            </a>{" "}
            <div>
              Incorrect Answers will appear with{" "}
              <a
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontStyle: "normal",
                }}
              >
                RED
              </a>{" "}
              font.
            </div>
            This is a practice question. The next 10 questions are the real
            deal, Ally McBeal.{" "}
          </div>
          <div></div>
        </div>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            borderColor: colors.black,
            borderWidth: "3px",
            borderStyle: "solid",
          }}
        >
          <CardHeader
            bgColor={colors.black}
            fontColor={"white"}
            question={"Should you click on a gray box to answer a question?"}
          />
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {answers.map((res) => (
                <div
                  key={res}
                  style={{
                    backgroundColor: "lightgray",
                    margin: "4px",
                    padding: "10px",
                    paddingTop: "10px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    paddingLeft: "20px",
                    width: "40%",
                    cursor: "pointer",
                    fontWeight: "bold",
                    justifyContent: "center",
                    borderRadius: "5px"
                  }}
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

          <div id="start-button" style={{ display: "none", marginTop: "20px", marginLeft: "400px", marginBottom: "20px" }}>
            <Button
              name="start quiz"
              buttonId={"0"}
              handleFunction={next}
              bgColor={colors.black}
              fontColor={colors.white}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartCard;
