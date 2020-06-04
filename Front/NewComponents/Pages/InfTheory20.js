import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory19" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 20: Обработка чисел с помощью алгоритмов</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать операции для работы с числами и циклы..</p>
                    <p>1) Цикл for: for(Счетчик; Условие; Изменение счетчика) - выполняется, пока условие верно</p>
                    <p>2) Цикл while: for(Условие) - выполняется, пока условие верно, обычно счетчик уже определен до цикла и изменяется в теле цикла</p>
                    <p>A % B, A mod B, mod(A, B) - Остаток от деления числа A на B</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory21" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

