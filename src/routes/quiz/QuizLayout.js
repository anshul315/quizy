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


    render(){
        
        let display = "";
        if(this.state.started){
            let active_question = this.state.questions[this.state.active_question]
            display = <div>
                        <Question key={active_question._id} question={active_question} />
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