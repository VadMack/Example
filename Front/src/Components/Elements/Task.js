import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class Task extends React.Component {

    state = {
        isOpen: false
    };

    render() {
        let text = this.props.text.replace(/\\n/g, "\n");
        const hiddenText = this.state.isOpen && <seсtion className="card-text">{text}</seсtion>;
        return (
            <Card style={{fontSize: '12px', width: '40rem', margin: '1rem'}}>
                <Card.Body>
                    <Form action='javascript:void(0)'>
                        <Form.Label style={{whiteSpace: 'pre-line', textAlign: 'left'}}> {text} </Form.Label>
                        {hiddenText}
                        <div>
                            <Button variant='dark' onClick={this.handleClick}>
                                {this.state.isOpen ? 'Скрыть текст' : 'Открыть текст'}
                            </Button>
                        </div>
                        <Form.Control style={{marginTop:'4px'}}>
                        </Form.Control>
                    </Form>
                </Card.Body>
            </Card>
        );
    }


    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}

export default Task