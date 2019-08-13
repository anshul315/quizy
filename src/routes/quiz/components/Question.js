import React from "react";
import Answer from "./Answer";

const question = (props) => {
    return (
        <React.Fragment>
                    <p>{props.question.title}</p>
                    { props.question.answers.map(answer => <Answer key={answer._id} answer={answer} />)}
        </React.Fragment>

    )
}

export default question;