import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory2" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                <h1>Задание 3: Определение лексического значения многозначных слов</h1>
                <br/>
                <h5>Алгоритм выполнения задания:</h5>
                <ol>
                    <li>Внимательно прочитайте текст.</li>
                    <li>Определите контекст, в котором употреблено выделенное слово.</li>
                    <li>Исходя из контекста подберите верное определение, отбрасывая те, что очевидно не подходят.</li>
                </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory4" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

