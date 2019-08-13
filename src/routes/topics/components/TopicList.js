import React from "react";
import Topic from "./Topic";

const topicList = (props) => {
    return (
        <React.Fragment>
            { props.topics.map(topic => <Topic key={topic.id} topic={topic} />)}
        </React.Fragment>
    )
}

export default topicList;