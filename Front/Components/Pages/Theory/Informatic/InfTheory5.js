import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory4" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 5: Кодирование и декодирование информации</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь кодировать и декодировать сообщения.</p>
                    <p>Условие Фано: Если в код входит слово a, то для любой непустой строки b слова ab в коде не существует.</p>
                    <p>Условие Фано позволяет получить префиксный код, который позволяет однозначно декодировать полученное сообщение.</p>
                    <p></p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory6" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

