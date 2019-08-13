import React from "react";
import TopicList from "./components/TopicList";
import axios from "axios";

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

    componentDidMount(){
        axios("http://localhost:3001/content/topics")
        .then(response => {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    topics: response.data
                })
            })
        })
        .catch(error => console.log(error))
    }

    topicSelected = (topic) => {
        console.log(topic);
        axios.post(`http://localhost:3001/quiz/create/${topic._id}`)
        .then(response => {
            this.props.history.push(`/quiz/${response.data._id}`);
        })
        
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