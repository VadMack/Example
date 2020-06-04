import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory21" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 22: Перебор вариантов</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь строить дерево и работать с графами.</p>
                    <p>Выполнение этого задания аналогично по структуре выполнению задания 15, где нужно посчитать количество путей. Только в данной задаче пунктами являются числа. Для решения задачи нужно исходя из условия задачи построить такой граф и подсчитать требуемое количество путей.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory23" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

