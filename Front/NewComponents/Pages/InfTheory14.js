import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory13" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 14: Алгоритмы для работы со строками и на плоскости.</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать команды исполнителей.</p>
                    <p>А) заменить (v, w).<br/>
                    Эта команда заменяет в строке первое слева вхождение цепочки v на цепочку w.<br/>
                    Например, выполнение команды<br/>
                    заменить (111, 27)<br/>
                    преобразует строку 05111150 в строку 0527150.<br/>
                    Если в строке нет вхождений цепочки v, то выполнение команды заменить (v, w) не меняет эту строку.<br/>
                    Б) нашлось (v).<br/>
                    Эта команда проверяет, встречается ли цепочка v в строке исполнителя<br/>
                    В) пока (условие)<br/>
                    Эта команда проверяет условие и выполняет инструкции ниже, пока оно верно.<br/>
                    Г) если (условие)<br/>
                    Эта команда проверяет условие и, если оно верно, то выполняет код ниже, если не верно, то пропускает блок кода и продолжает выполнение программы.</p>
                    <p></p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory15" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

