import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const config = require("../../config.js");


class FillingDatabase extends React.Component {

    constructor() {
        super();
        this.state = {
            taskList: [],
            isClicked: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }


    render() {

        let screenWidth = window.innerWidth;
        let cardWidth;
        if (screenWidth > 500)
            cardWidth = '46rem';
        else
            cardWidth = '96vw';

        let taskList = [];

        let numOfTasks;
        let sbj = this.props.match.params.sbj;

        switch (sbj) {
            case "rus":
                numOfTasks = 27;
                break;
            case "inf":
                numOfTasks = 27;
                break;
            default:
                console.log("Error")
        }

        for (let i = 0; i < numOfTasks; i++) {
            taskList[i] = {

            }
        }


        let counter = 0;

        taskList = taskList.map((item) =>
            <Card key={counter} className="font-oswald"
                  style={{fontSize: '20px', width: cardWidth, marginTop: '1rem'}}>
                <Form>
                    <div>
                        {++counter}
                    </div>
                    <Form.Label>
                        type
                    </Form.Label>
                    <Form.Control name={counter + "-type"}
                                  onChange={this.handleChange}/>
                    <Form.Label>
                        text
                    </Form.Label>
                    <Form.Control name={counter + "-text"}
                                  onChange={this.handleChange}/>
                    <Form.Label>
                        addText
                    </Form.Label>
                    <Form.Control name={counter + "-addText"}
                                  onChange={this.handleChange}/>
                    <Form.Label>
                        answer
                    </Form.Label>
                    <Form.Control name={counter + "-answer"}
                                  onChange={this.handleChange}/>
                    <Form.Label>
                        withPic
                    </Form.Label>
                    <Form.Check name={counter + "-withPic"}
                                size=""
                                label="Нужна ли картинка"
                                onChange={this.handleChange}
                                style={{fontSize: "15px"}}/>
                </Form>
            </Card>
        );


        let submitButton = !this.state.isClickedSB && <Button className="font-oswald"
                                                              variant={"light"}
                                                              onClick={() => {
                                                                  this.setState({
                                                                      isClickedSB: true
                                                                  });
                                                                  window.scroll(0, 0);
                                                                  fetch(config.ip + "/" + sbj + "/variant.addNew/",
                                                                      {
                                                                          method: 'POST',
                                                                          headers: {
                                                                              'Content-Type': 'application/json'
                                                                          },
                                                                          body: JSON.stringify(this.state.taskList)
                                                                      })



                                                              }}
                                                              style={{marginTop: "1vh"}}>
            Залить
        </Button>;


        return (
            <div align="center" style={{backgroundColor: "#474747", padding: "2px"}}>
                <div>{taskList}</div>
                <div>{submitButton}</div>
            </div>

        )
    }


    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.updateData(name, value);

    }

    updateData = async (name, value) => {
        await this.setState(state => {
            let number = "";
            let fieldName = "";
            let i = 0;

            while (name[i] !== "-") {
                number = number + name[i];
                i++;
            }
            if (name[i] === "-") {
                i++;
            }
            while (i < name.length) {
                fieldName = fieldName + name[i];
                i++;
            }

            const taskList = state.taskList;

            switch (fieldName) {
                case "type":
                    taskList[number - 1] = {...state.taskList[number - 1], type: value};
                    break;
                case "text":
                    taskList[number - 1] = {...state.taskList[number - 1], text: value};
                    break;
                case "addText":
                    taskList[number - 1] = {...state.taskList[number - 1], addText: value};
                    break;
                case "answer":
                    taskList[number - 1] = {...state.taskList[number - 1], answer: value};
                    break;
                case "withPic":
                    if (taskList[number - 1]) {
                        if (state.taskList[number - 1].withPic !== true)
                            taskList[number - 1] = {...state.taskList[number - 1], withPic: true};
                        else
                            taskList[number - 1] = {...state.taskList[number - 1], withPic: false};
                    } else
                        taskList[number - 1] = {...state.taskList[number - 1], withPic: true};
                    break;
                default:
                    console.log("Error");


            }
            console.log(taskList);
            return {
                taskList
            };
        });
    }
}

export default FillingDatabase