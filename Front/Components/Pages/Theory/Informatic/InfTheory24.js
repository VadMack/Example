import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory23" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 24: Поиск ошибок в программе</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать типичные ошибки в программах.</p>
                    <p>В данном задании требуется найти только логические ошибки, синтаксические в нем не встречаются!</p>
                    <p><b>Типы ошибок:</b></p>
                    <ol>
                        <li>Взятие остатка (%) вместо деления (/, \, //) и наоборот</li>
                        <li>Неправильное расположение переменных при выполнении каких-либо операций</li>
                        <li>В цикле инкрементируется/декрементируется другая переменная</li>
                        <li>Переменная инициализирована ошибочным значением</li>
                        <li>Переменная складывается, умножается и т.д. с ошибочным значением</li>
                        <li>Строчки кода располагаются в неправильном порядке</li>
                        <li>Неправильное использование префиксной/постфиксной формы инкремента/декремента</li>
                        <li>Полученное значение записывается в другую переменную</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory25" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

