import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory14" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 15: Поиск путей в графе</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь правильно подсчитывать число путей в графе.</p>
                    <p>Так, для каждой точки X, в которую ведет Y путей из разных, число способов попасть в этот пункт будет равно сумме числа путей в каждый из Y путей.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory16" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

