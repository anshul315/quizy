import React from "react";
import Question from "./components/Question";

class QuizLayout extends React.Component{ 
    state = {
        started: false,
        questions: [
            {
                _id: 1,
                title: "What is 2+2?",
                answers: [
                    {
                        _id: 1,
                        title: "9",
                        is_correct: false
                    },
                    {
                        _id: 2,
                        title: "3",
                        is_correct: false
                    },
                    {
                        _id: 3,
                        title: "2",
                        is_correct: false
                    },
                    {
                        _id: 4,
                        title: "4",
                        is_correct: true
                    },

                ]
            },
            {
                _id: 2,
                title: "What is 2+8?",
                answers: [
                    {
                        _id: 1,
                        title: "9",
                        is_correct: false
                    },
                    {
                        _id: 2,
                        title: "3",
                        is_correct: false
                    },
                    {
                        _id: 3,
                        title: "2",
                        is_correct: false
                    },
                    {
                        _id: 4,
                        title: "10",
                        is_correct: true
                    },

                ]
            }

        ],
        active_question: -1,
        ended: false,
        participants: [],
        topic: {},
        correct_count: 0,
    }

    startQuiz = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                started: true,
                active_question: 0
            }
        })
    }

    selectAnswer = (answer) =>{
        let ended = false;
        let nextQuestionIndex = this.state.active_question + 1
        if(nextQuestionIndex >= this.state.questions.length){
            ended = true
            nextQuestionIndex = this.state.active_question
        }

        if(answer.is_correct){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    active_question: nextQuestionIndex,
                    ended: ended,
                    correct_count: prevState.correct_count + 1
                }
            })
        }else{
            this.setState((prevState) => {
                return {
                    ...prevState,
                    active_question: nextQuestionIndex,
                    ended: ended,
                }
            })
        }

    }


    render(){
        
        let display = "";
        if(this.state.ended){
            display = <div>
                        <p> Quiz Ended </p>
                        <h6>Your score {this.state.correct_count} / {this.state.questions.length}</h6>
                      </div>
        } else if(this.state.started){
            let active_question = this.state.questions[this.state.active_question]
            display = <div>
                        <Question key={active_question._id} question={active_question} selectAnswer={this.selectAnswer}/>
                      </div>
        }else{
            display = <div>
                            <button onClick={this.startQuiz}>Start Quiz</button>
                    </div>
        }


        return (
            <div>
                {display}
            </div>
        )
    }
}

export default QuizLayout;