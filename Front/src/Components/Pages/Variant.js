import React, {Component} from "react";
import Task from "../Elements/Task"
const config = require("../../config.js");




class Varik extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tasks: []
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        let sbj = this.props.match.params.sbj;
        fetch(config.ip + sbj + "/variant.getReady/" + id)
            .then(res => res.json())
            .then(
                async (result) => {

                    const taskList = Object.keys(result).map(item =>
                    <Task name={result[item].name} text={result[item].text}/>);

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

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div align='center'>Загрузка...</div>;
        } else {
            return (
                <div align="center" style={{backgroundColor: "#474747", padding: "2px"}}>
                    {this.state.tasks}
                </div>

            );
        }
    }




}

export default Varik