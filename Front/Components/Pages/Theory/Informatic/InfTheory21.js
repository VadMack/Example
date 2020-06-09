import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory20" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 21: Работа с функциями</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с функциями.</p>
                    <p>Типичной задачей является нахождение значения (диапазона значений), при котором (которых) одна функция станет больше другой.</p>
                    <p>Для этого нужно проанализировать формулы функций и, подставляя значения, найти нужное.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory22" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

