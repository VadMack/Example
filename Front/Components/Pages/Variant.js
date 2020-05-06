import React from "react";
import Button from "react-bootstrap/Button";
import TaskList from "../Elements/TaskList"
import ResultElement from "../Elements/ResultElement";

const config = require("../../config.js");


class Varik extends React.Component {

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
        let numOfTasks;
        switch (sbj) {
            case ("rus"):
                numOfTasks = 2;
                break;
            case ("inf"):
                numOfTasks = 30;
                break;
            default:
                numOfTasks = 1;
        }

        fetch(config.ip + "/" + sbj + "/variant.getReady/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    let answerList = [];
                    for (let i = 0; i < numOfTasks; ++i) {
                        answerList[i] = {id: String(i+1), answ: "не введен"};
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
                                   maxPoints={this.state.assessmentData.maxPoints}/>
                    <TaskList data={this.state.data} updateData={this.updateData} assessmentData={this.state.assessmentData}/>
                    {submitButton}
                </div>

            );
        }
    }


    updateData = async (fieldName, answer) => {

        await this.setState(state => {
            //const answerList = state.answerList.concat({id: fieldName, answ: answer});
            const answerList = state.answerList;
            answerList[Number(fieldName)-1] = {id: fieldName, answ: answer};

            return {
                answerList
            };
        });

    };


}

export default Varik