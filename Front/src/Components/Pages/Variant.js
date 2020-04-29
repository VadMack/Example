import React, {Component} from "react";
import Task from "../Elements/Task"
import Button from "react-bootstrap/Button";

const config = require("../../config.js");


class Varik extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            answerList: []
        };

    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let sbj = this.props.match.params.sbj;
        fetch(config.ip + "/" + sbj + "/variant.getReady/" + id)
            .then(res => res.json())
            .then(
                (result) => {

                    const taskList = Object.keys(result).map(item =>
                        <Task
                            key={result[item].id}
                            id={result[item].id}
                            name={result[item].name}
                            text={result[item].text}
                            addText={result[item].addText}
                            updateData={this.updateData}
                        />);
                    this.setState({
                        isLoaded: true,
                        tasks: taskList
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

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div align='center'>Загрузка...</div>;
        } else {
            return (
                <div align="center" style={{backgroundColor: "#474747", padding: "2px"}}>
                    {this.state.tasks}
                    <Button className="font-oswald"
                            onClick={() => {
                                fetch(config.ip + "/" + sbj + "/variant.check/",
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(this.state.answerList)
                                    })
                            }}>
                    </Button>
                </div>

            );
        }
    }


    updateData = async (fieldName, answer) => {

        await this.setState(state => {
            const answerList = state.answerList.concat({id: fieldName, answ: answer});
            return {
                answerList
            };
        });

        console.log(this.state.answerList)
    };


}

export default Varik