import React from "react";
import Topic from "./Topic";

const topicList = (props) => {

    return (
        <React.Fragment>
            { props.topics.map(topic => <Topic key={topic._id} topic={topic} topicSelected={() => props.topicSelected(topic)}/>)}
        </React.Fragment>
    )
}

export default topicList;