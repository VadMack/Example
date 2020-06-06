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
                    resTable[i] = <tr key={this.props.results[i].numInVar}>
                        <td>{this.props.results[i].numInVar}</td>
                        <td>{this.props.results[i].points}</td>
                        <td style={{maxWidth: "8rem", wordWrap: "break-word"}}>{this.props.results[i].userAnswer}</td>
                        <td style={{
                            maxWidth: "8rem",
                            wordWrap: "break-word"
                        }}>{this.props.results[i].correctAnswer}</td>
                    </tr>
                }
            }
        }


        let resultBar = this.props.isClicked &&
            <Card className="font-oswald" style={{fontSize: '20px', width: cardWidth, marginTop: '1rem'}}>
                <Card.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Баллов</th>
                            <th>Ваш ответ</th>
                            <th>Верный ответ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {resTable}
                        <tr>
                            <th colSpan="3">Набрано первичных баллов</th>
                            <td>{this.props.totalPoints}</td>
                        </tr>
                        <tr>
                            <th colSpan="3">Набрано вторичных баллов</th>
                            <td>{this.props.testResult}</td>
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