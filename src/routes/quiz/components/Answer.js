import React from "react";

const answer = (props) => {
    return (
        <React.Fragment>
            <p onClick={props.selectAnswer}>{props.answer.title}</p>
        </React.Fragment>
    )
}

export default answer;