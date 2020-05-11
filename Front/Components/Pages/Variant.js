import React from "react";
import Button from "react-bootstrap/Button";
import TaskList from "../Elements/TaskList"
import ResultElement from "../Elements/ResultElement";

const config = require("../../config.js");


class Variant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            answerList: [],
            assessmentData: [],
            data: [],
            isClickedSB: false
        };

    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let sbj = this.props.match.params.sbj;

        fetch(config.ip + "/" + sbj + "/variant.getReady/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    let answerList = [];
                    for (let i = 0; i < result.length; ++i) {
                        answerList[i] = {id: result[i].id, answ: ""};
                    }

                    this.setState({
                        isLoaded: true,
                        data: result,
                        answerList: answerList
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

        let submitButton = !this.state.isClickedSB && <Button className="font-oswald"
                                                              variant={"light"}
                                                              onClick={() => {
                                                                  this.setState({
                                                                      isClickedSB: true
                                                                  });
                                                                  window.scroll(0, 0);
                                                                  fetch(config.ip + "/" + sbj + "/variant.check/",
                                                                      {
                                                                          method: 'POST',
                                                                          headers: {
                                                                              'Content-Type': 'application/json'
                                                                          },
                                                                          body: JSON.stringify(this.state.answerList)
                                                                      })
                                                                      .then(res => res.json())
                                                                      .then(
                                                                          (result) => {
                                                                              this.setState({assessmentData: result});
                                                                              //console.log(this.state.isRight)
                                                                          })


                                                              }}
                                                              style={{marginTop: "1vh"}}>
            Отправить на проверку
        </Button>;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div align='center'>Загрузка...</div>;
        } else {
            return (
                <div align="center" style={{backgroundColor: "#474747", padding: "2px"}}>
                    <ResultElement isClicked={this.state.isClickedSB}
                                   results={this.state.assessmentData.results}
                                   totalPoints={this.state.assessmentData.totalPoints}
                                   maxPoints={this.state.assessmentData.maxPoints}
                                   testResult={this.state.assessmentData.testResult}/>
                    <TaskList data={this.state.data}
                              updateData={this.updateData}
                              assessmentData={this.state.assessmentData}
                    />
                    {submitButton}
                </div>

            );
        }
    }


    updateData = async (fieldName, answer) => {
        let id = "";
        let numInVar = "";
        let i = 0;

        while (fieldName[i] !== "-") {
            id = id + fieldName[i];
            i++;
        }
        if (fieldName[i] === "-") {
            i++;
        }
        while (i < fieldName.length) {
            numInVar = numInVar + fieldName[i];
            i++;
        }

        await this.setState(state => {
            const answerList = state.answerList;
            answerList[Number(numInVar) - 1] = {id: id, answ: answer};

            return {
                answerList
            };
        });

    };


}

export default Variant