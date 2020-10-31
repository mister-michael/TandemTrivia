import React from 'react';
import colors from '../../modules/colors';
import Button from './Button';
import CardHeader from './CardHeader';
import Score from './Score';

const EndCard = ({score}) => {

  const refreshPage = () => {
    window.location.reload()
  }
    return (
        <div style={{
            fontSize: "16px",
            fontStyle: "italic",
            marginBottom: "20px",
            padding: "0px 10px",
          }}>
            <CardHeader bgColor={colors.white}
          fontColor={colors.black}
          question={"Congrats! Your final score is..."}/>
          <Score score={score}/>
          <Button name={"play again"} handleFunction={refreshPage}/>
        </div>
    );
};

export default EndCard;