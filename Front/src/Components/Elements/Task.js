import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Task extends React.Component {

    state = {
        isOpen: false,
        isClicked: false,
        fieldName: null,
        answerArr: {}
    };

    render() {
        let screenWidth = window.innerWidth;
        let cardWidth;
        if (screenWidth > 500)
            cardWidth = '46rem';
        else
            cardWidth = '96vw';

        let text = this.props.text.replace(/\\n/g, "\n");
        let addText = this.props.addText.replace(/\\n/g, "\n");

        let buttonHT;

        if (addText) {
            buttonHT = (
                <Button className="font-oswald" variant='dark' onClick={this.handleClick}>
                    {this.state.isOpen ? 'Скрыть текст' : 'Открыть текст'}
                </Button>
            );
        }
        const hiddenText = this.state.isOpen && <div className="card-text" style={{textAlign: 'left'}}>{addText}</div>;

        let saveStatus;

        if (!this.state.isClicked) {
            saveStatus = <Button className="font-oswald" variant='dark'
                                 onClick={() => {
                                     this.setState({isClicked: true});
                                     this.props.updateData(this.props.id, this.state.answerArr[this.props.id]);
                                 }}
                                 style={{marginTop: '4px'}}>
                                 Сохранить ответ
                        </Button>
        }
        else{
            saveStatus = <div>Ответ сохранен</div>
        }


        return (

            <Card style={{fontSize: '12px', width: cardWidth, marginTop: '1rem'}}>
                <Card.Body>
                    <Form onSubmit={this.formSubmitHandler}>
                        <Form.Label className="font-oswald" style={{
                            whiteSpace: 'pre-line',
                            textAlign: 'left',
                            fontSize: '20px'
                        }}> {text} </Form.Label>
                        {hiddenText}
                        <div>
                            {buttonHT}
                        </div>
                        <Form.Control type='text'
                                      name={this.props.id}
                                      onChange={this.handleChange.bind(this)}
                                      style={{marginTop: '4px'}}>
                        </Form.Control>
                        {saveStatus}
                    </Form>
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
        this.setState({
            fieldName: fieldName,
            answerArr: {[fieldName]: answer}
        });
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        return false;
    }

}

export default Task