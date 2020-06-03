import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const config = require("../../config.js");

class Task extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isClicked: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let screenWidth = window.innerWidth;
        let cardWidth;
        let imgWidth;
        if (screenWidth > 500) {
            cardWidth = '46rem';
            imgWidth = '40rem';
        }
        else {
            cardWidth = '96vw';
            imgWidth = '78vw';
        }

        let bgColor = 'light';
        if (this.props.isRight === 2) {
            bgColor = 'success';
        } else if (this.props.isRight === 0) {
            bgColor = 'danger';
        } else if (this.props.isRight === 1) {
            bgColor = 'warning';
        }


        let text = this.props.text.replace(/\\n/g, "\n");
        let addText;
        if (this.props.addText) {
            addText = this.props.addText.replace(/\\n/g, "\n");
        }
        let numInVar = this.props.numInVar;

        let buttonHT;

        if (addText) {
            buttonHT = (
                <Button className="font-oswald" variant='dark' onClick={this.handleClick}>
                    {this.state.isOpen ? 'Скрыть текст' : 'Открыть текст'}
                </Button>
            );
        }


        const image = this.props.withPic &&
            <img src={config.imageIP + "/media/" + this.props.sbj + "/pic/" + this.props.id + ".jpg"}
                 alt="Error"
            style={{maxWidth: imgWidth}}/>;

        const hiddenText = this.state.isOpen &&
            <div className="card-text exo2" style={{textAlign: 'left', fontSize: '15px'}}>{addText}</div>;

        let downOfCard;
        let formName = String(this.props.id);
        if (this.props.numInVar) {
            formName = formName + "-" + String(numInVar);
        }

        if (!this.props.correctAnswer) {
            downOfCard =
                <Form onSubmit={this.formSubmitHandler}>
                    <Form.Label className="font-oswald"
                                style={{
                                    whiteSpace: 'pre-line',
                                    textAlign: 'left',
                                    fontSize: '20px'
                                }}>
                        {text}
                    </Form.Label>
                    {image}
                    <div style={{
                        whiteSpace: 'pre-line'
                    }}>
                        {hiddenText}
                    </div>
                    <div>
                        {buttonHT}
                    </div>
                    <Form.Control type='text'
                                  name={formName}
                                  placeholder="Введите ответ"
                                  onChange={this.handleChange}
                                  style={{marginTop: '4px'}}>
                    </Form.Control>
                </Form>
        } else {
            downOfCard =
                <div className="font-oswald">
                    <div style={{
                        whiteSpace: 'pre-line',
                        textAlign: 'left',
                        fontSize: '20px'
                    }}>
                        {text}
                    </div>
                    <div style={{
                        whiteSpace: 'pre-line'
                    }}>
                        {hiddenText}
                    </div>
                    <div>
                        {buttonHT}
                    </div>
                    <div style={{
                        textAlign: 'center',
                        fontSize: '25px'
                    }}>
                        <div>
                            Ваш ответ: {this.props.userAnswer}
                        </div>
                        <div>
                            Верный ответ: {this.props.correctAnswer}
                        </div>
                    </div>
                </div>
        }


        return (

            <Card bg={bgColor} style={{fontSize: '12px', width: cardWidth, marginTop: '1rem'}}>
                <Card.Body>
                    <div className="font-oswald" style={{fontSize: '20px'}}>
                        {this.props.numInVar}
                    </div>
                    {downOfCard}
                </Card.Body>
            </Card>


        );
    }


    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleChange(event) {

        let fieldName = event.target.name;
        let answer = event.target.value;
        this.props.updateData(fieldName, answer);
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        return false;
    }

}

export default Task