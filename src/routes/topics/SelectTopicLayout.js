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
        ],
        personal_details: {},
        join_quiz_id: ""
    }

    handleInputChange = (event) => {
        const target = event.target;    
        this.setState({
          [target.name]: target.value
        });
      }

    componentDidMount(){
        axios("https://ipapi.co/json/")
        .then(response => {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    personal_details: response.data
                })
            })
        })
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
        axios.post(`http://localhost:3001/quiz/create/${topic._id}`, {
            user_id: this.state.personal_details.ip,
          })
        .then(response => {
            this.props.history.push(`/quiz/${response.data._id}`);
        })
        
    }

    joinQuiz = () => {
        axios.post(`http://localhost:3001/quiz/join/${this.state.join_quiz_id}`, {
            user_id: this.state.personal_details.ip,
          })
        .then(response => {
            this.props.history.push(`/quiz/${response.data._id}`);
        })
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" name="join_quiz_id" value={this.state.join_quiz_id} onChange={this.handleInputChange} />
                    <button onClick={this.joinQuiz} className="btn btn-primary"> Join Quiz </button>
                </div>
                <TopicList topics={this.state.topics} topicSelected={this.topicSelected} />
            </div>
        )
    }
}

export default SelectTopicLayout;