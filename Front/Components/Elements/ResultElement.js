import React from "react";
import Card from "react-bootstrap/Card";

class resultElement extends React.Component {
    render() {

        let screenWidth = window.innerWidth;
        let cardWidth;
        if (screenWidth > 500)
            cardWidth = '46rem';
        else
            cardWidth = '96vw';

        let resultList;

        if (this.props.results) {
            resultList = this.props.results.map((result) =>

                <div>
                    {result.id}) {result.points}
                </div>
            );
        }

        let resultBar = this.props.isClicked && <Card className="font-oswald" style={{fontSize: '20px', width: cardWidth, marginTop: '1rem'}}>
                                                    <Card.Body>
                                                        Вы набрали {this.props.totalPoints} балл(ов) из {this.props.maxPoints} возможных

                                                        {resultList}
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