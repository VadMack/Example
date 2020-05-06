import React from "react";
import Task from "../Elements/Task"

class TaskList extends React.Component{
    render(){

        let isRight = [];
        let correctAnswer = [];
        let userAnswer = [];

        let j = 1;

       for (let i = 0; i < 10; i++) {
            if (this.props.assessmentData.results) {
                if (this.props.assessmentData.results[i]) {
                    isRight[this.props.assessmentData.results[i].id] = this.props.assessmentData.results[i].result;
                    correctAnswer[this.props.assessmentData.results[i].id] = this.props.assessmentData.results[i].correctAnswer;
                    userAnswer[this.props.assessmentData.results[i].id] = this.props.assessmentData.results[i].userAnswer;
                }
            }
        }


        const taskList = Object.keys(this.props.data).map(item =>
            <Task
                key={this.props.data[item].id}
                id={this.props.data[item].id}
                name={this.props.data[item].name}
                text={this.props.data[item].text}
                addText={this.props.data[item].addText}
                isRight={isRight[j]}
                userAnswer={userAnswer[j]}
                correctAnswer={correctAnswer[j++]}
                updateData={this.props.updateData}
            />);

        return(
            <div>
                {taskList}
            </div>
        )
    }
}

export default TaskList