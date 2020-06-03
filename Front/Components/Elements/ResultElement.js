import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

class resultElement extends React.Component {
    render() {

        let screenWidth = window.innerWidth;
        let cardWidth;
        if (screenWidth > 500)
            cardWidth = '46rem';
        else
            cardWidth = '96vw';


        let resTable = [];
        if (this.props.results) {
            for (let i = 0; i < this.props.results.length; i++) {
                if (this.props.results[i]) {
                    resTable[i] = <tr>
                        <th>{this.props.results[i].numInVar}</th>
                        <th>{this.props.results[i].points}</th>
                        <th style={{maxWidth:"8rem", wordWrap:"break-word"}}>{this.props.results[i].userAnswer}</th>
                        <th style={{maxWidth:"8rem", wordWrap:"break-word"}}>{this.props.results[i].correctAnswer}</th>
                    </tr>
                }
            }
        }


        let resultBar = this.props.isClicked &&
            <Card className="font-oswald" style={{fontSize: '20px', width: cardWidth, marginTop: '1rem'}}>
                <Card.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>#</th>
                            <th>Баллов</th>
                            <th>Ваш ответ</th>
                            <th>Верный ответ</th>
                        </thead>
                        <tbody>
                            {resTable}
                            <tr>
                                <th colSpan="3">Набрано первичных баллов</th>
                                <th>{this.props.totalPoints}</th>
                            </tr>
                            <tr>
                                <th colSpan="3">Набрано вторичных баллов</th>
                                <th>{this.props.testResult}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>;


        return (
            <div>
                {resultBar}
            </div>
        )
    }

}

export default resultElement