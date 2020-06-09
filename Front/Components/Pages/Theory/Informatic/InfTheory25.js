import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory24" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 25: Обработка массивов</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать алгоритмы обработки массивов.</p>
                    <p>В данном задании чаще всего требуется пройтись по массиву с помощью цикла for, проверяя некоторые условия.</p>
                    <p>Например, если в задании дан массив из 100 элементов и требуется найти количество элементов, больших 50, но меньших 80, то
                    с помощью цикла for нужно проверить каждый элемент с поставленным условием.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory26" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

