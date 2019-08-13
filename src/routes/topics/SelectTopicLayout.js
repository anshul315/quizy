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
                _id: 1,
                title: "Topic - 2"
            },
            {
                _id: 1,
                title: "Topic - 3"
            }
        ]
    }

    render(){
        return (
            <div>
                <TopicList topics={this.state.topics} />
            </div>
        )
    }
}

export default SelectTopicLayout;