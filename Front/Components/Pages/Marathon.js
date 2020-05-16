import React from "react";
import Task from "../Elements/Task"
import Button from "react-bootstrap/Button";

const config = require("../../config.js");

class Marathon extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            task: {},
            newAnswer: {id: "", answ: ""},
            assessmentData: [],
            isClicked: false,
            idUsed: {"usedArray": []}
        }
    }

    componentDidMount() {
        let sbj = this.props.match.params.sbj;
        let prototype = this.props.match.params.prototype;

        fetch(config.ip + "/" + sbj + "/exercise.getMarathon/" + prototype, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.idUsed)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        task: result.exercise,
                        idUsed: {
                            usedArray: result.usedArray
                        },
                        newAnswer: {
                            id: result.exercise.id,
                            answ: ""
                        },
                        isLoaded: true,
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },
            )

    }

    render() {
        const {error, isLoaded} = this.state;
        let sbj = this.props.match.params.sbj;
        let prototype = this.props.match.params.prototype;
        let isRight;
        let userAnswer;
        let correctAnswer;
        if (this.state.assessmentData.results) {
            if (this.state.assessmentData.results[0]) {
                isRight = this.state.assessmentData.results[0].result;
                userAnswer = this.state.assessmentData.results[0].userAnswer;
                correctAnswer = this.state.assessmentData.results[0].correctAnswer;
            }
        }

        if (error) {
            return <div align='center'>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div align='center'>Загрузка...</div>;
        } else {
            return (
                <div align="center" style={{backgroundColor: "#474747", padding: "2px", minHeight: "100vh"}}>
                    <Task id={this.state.task.id}
                          text={this.state.task.text}
                          addText={this.state.task.addText}
                          updateData={this.updateData}
                          isRight={isRight}
                          userAnswer={userAnswer}
                          correctAnswer={correctAnswer}/>
                    <Button variant={"light"}
                            onClick={() => {
                                window.scroll(0, 0);
                                if (!this.state.isClicked) {
                                    const array = [];
                                    array[0] = this.state.newAnswer;
                                    fetch(config.ip + "/" + sbj + "/variant.check/",
                                        {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(array)
                                        })
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                this.setState({assessmentData: result});
                                            })
                                } else {
                                    fetch(config.ip + "/" + sbj + "/exercise.getMarathon/" + prototype, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(this.state.idUsed)
                                    })
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                this.setState({
                                                    task: result.exercise,
                                                    assessmentData: {
                                                        results: null,
                                                    },
                                                    newAnswer: {
                                                        id: result.exercise.id,
                                                        answ: ""
                                                    },
                                                    idUsed: {
                                                        usedArray: result.usedArray
                                                    },
                                                })

                                            },
                                            () => {
                                                this.setState({
                                                    assessmentData: {
                                                        results: null,
                                                    },

                                                    task: {
                                                        text: "Упс! Кажется, у нас кончились задания))",
                                                        addText: ""
                                                    },

                                                });
                                            }
                                        )
                                }
                                this.setState({
                                    isClicked: !this.state.isClicked
                                });


                            }}
                            style={{marginTop: "1vh"}}
                    >Далее</Button>
                </div>

            )
        }
    }


    updateData = async (fieldName, answer) => {

        await this.setState(() => {
            let newAnswer;
            newAnswer = {id: fieldName, answ: answer};
            return {
                newAnswer
            };
        });

    };


}

export default Marathon;