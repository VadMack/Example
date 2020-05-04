import React from "react";
import Button from "react-bootstrap/Button";
import TaskList from "../Elements/TaskList"

const config = require("../../config.js");


class Varik extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            answerList: [],
            isRight: [],
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
                numOfTasks = 3;
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
                    for (let i = 1; i <= numOfTasks; ++i) {
                        answerList[i] = {id: String(i), answ: "не введен"};
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
                                                                              this.setState({isRight: result});
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
                    <TaskList data={this.state.data} updateData={this.updateData} isRight={this.state.isRight}/>
                    {submitButton}
                </div>

            );
        }
    }


    updateData = async (fieldName, answer) => {

        await this.setState(state => {
            //const answerList = state.answerList.concat({id: fieldName, answ: answer});
            const answerList = state.answerList;
            answerList[Number(fieldName)] = {id: fieldName, answ: answer};
            console.log(answerList);
            return {
                answerList
            };
        });

    };


}

export default Varik