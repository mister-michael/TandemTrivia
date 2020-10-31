import React from 'react';

const CircleIcon = ({number}) => {
    return (
        <div style={styles.container}>
            {number}
        </div>
    );
};

const styles = {
    container: {
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        height: "10%",
        padding: "5%",
        width: "10%"

    }

}

export default CircleIcon;