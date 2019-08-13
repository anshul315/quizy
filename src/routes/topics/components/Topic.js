import React from "react";

const topic = (props) => {
    return (
        <div>
            <p onClick={props.topicSelected}>{props.topic.title}</p>
        </div>
    )
}

export default topic;