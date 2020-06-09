import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory10" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 11: Рекурсия</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать понятие рекурсии.</p>
                    <p>В программировании рекурсия — вызов функции (процедуры) из неё же самой, непосредственно (простая рекурсия) или через другие функции (сложная или косвенная рекурсия).</p>
                    <p>Рекурсивная программа позволяет описать повторяющееся или даже потенциально бесконечное вычисление, причём без явных повторений частей программы и использования циклов.</p>
                    <p>Чтобы выполнить это задание успешно, нужно просто постепенно идти по программе и записывать шаги. Иногда может быть полезно построить дерево вызовов.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory12" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

