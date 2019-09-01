import React from "react";
import TopicList from "./components/TopicList";
import axios from "axios";
import NameModal from "./components/NameModal";
import {Redirect} from "react-router-dom";

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
        join_quiz_id: "",
        show_modal: true,
        name: "",
        quiz_id: "",
        go_to_quiz: false
    }

    handleInputChange = (event) => {
        const target = event.target;    
        this.setState({
            [target.name]: target.value
        });
    }

    dismissModal = () => {
        if(this.state.name.length > 0){
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    show_modal: false
                })
            })
        }
    }

    componentDidMount(){
        axios("https://ipapi.co/json/")
        .then(response => {
            response.data.ip += Math.floor((Math.random() * 10) + 1).toString();
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    personal_details: response.data
                })
            })
        })
        axios("http://9bcc2ead.ngrok.io/content/topics")
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
        axios.post(`http://9bcc2ead.ngrok.io/quiz/create/${topic._id}`, {
            user_id: this.state.personal_details.ip,
            name: this.state.name
          })
        .then(response => {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    go_to_quiz: true,
                    quiz_id: response.data._id

                })
            })
        })
        
    }

    joinQuiz = () => {
        axios.post(`http://9bcc2ead.ngrok.io/quiz/join/${this.state.join_quiz_id}`, {
            user_id: this.state.personal_details.ip,
            name: this.state.name
          })
        .then(response => {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    go_to_quiz: true,
                    quiz_id: response.data._id

                })
            })
        })
    }

    render(){
        let renderString = <div></div>
        if(this.state.show_modal === true){
            renderString = <div><NameModal nameChange={this.handleInputChange} dismissModal={this.dismissModal}/></div>
        }else if(this.state.go_to_quiz === true){
            renderString = <Redirect to={{pathname: `/quiz/${this.state.quiz_id}`, state: {...this.state}}} />
        } else {
            renderString = <div>
                                <div>
                                    <input type="text" name="join_quiz_id" value={this.state.join_quiz_id} onChange={this.handleInputChange} />
                                    <button onClick={this.joinQuiz} className="btn btn-primary"> Join Quiz </button>
                                </div>
                                <TopicList topics={this.state.topics} topicSelected={this.topicSelected} />
                            </div>
        }
        return (
            <div>
                {renderString}
            </div>

        )
    }
}

export default SelectTopicLayout;