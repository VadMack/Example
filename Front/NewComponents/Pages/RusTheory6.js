import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory5" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 6: Лексические нормы</h1>
                    <br/>
                    <p>Для выполнения задания требуется уметь анализировать текст и выявлять неуместное употребление слов.</p>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Внимательно прочитайте текст.</li>
                        <li>Выявите в текст плеоназм.</li>
                        <li>Исключите лишнее слово.</li>
                        <li>Перечитайте получившийся текст, чтобы убедиться в правильном выборе ответа.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory7" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory