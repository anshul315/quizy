import React from "react";
import TopicList from "./components/TopicList";

class SelectTopicLayout extends React.Component{

    state = {
        topics: [
            {
                _id: 1,
                title: "Topic - 1"
            },
            {
                _id: 2,
                title: "Topic - 2"
            },
            {
                _id: 3,
                title: "Topic - 3"
            }
        ]
    }

    topicSelected = (topic) => {
        console.log(topic);
        this.props.history.push(`/quiz/${topic._id}`);
    }


    render(){
        return (
            <div>
                <TopicList topics={this.state.topics} topicSelected={this.topicSelected} />
            </div>
        )
    }
}

export default SelectTopicLayout;