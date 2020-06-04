import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory18" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 19: Кодирование и декодирование информации</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с массивами.</p>
                    <p>1) Цикл for: for(Счетчик; Условие; Изменение счетчика) - выполняется, пока условие верно</p>
                    <p>2) Цикл while: for(Условие) - выполняется, пока условие верно, обычно счетчик уже определен до цикла и изменяется в теле цикла</p>
                    <p>Массив — структура данных, хранящая набор значений, идентифицируемых по индексу или набору индексов, принимающих целые значения из некоторого заданного непрерывного диапазона.</p>
                    <p>Обращение к элементу массива обычно выглядит так: A[i]</p>
                    <p></p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory20" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

