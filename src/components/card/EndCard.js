import React from 'react';
import colors from '../../modules/colors';
import CardHeader from './CardHeader';
import Score from './Score';

const EndCard = ({score}) => {
    return (
        <div style={{
            fontSize: "16px",
            fontStyle: "italic",
            marginBottom: "20px",
            padding: "0px 10px",
          }}>
            <CardHeader bgColor={colors.black}
          fontColor={"white"}
          question={"Congratulations! Your final score is..."}/>
          <Score score={score}/>
        </div>
    );
};

export default EndCard;