import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory1 extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory26" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 27: Сочинение по прочитанному тексту</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать структуру сочинения.</p>
                    <p><b>Структура сочинения:</b></p>
                    <ol>
                        <li>Вступление: формулировка проблемы (В приведенном тексте автор рассуждает над проблемой..)</li>
                        <li>Комментарий: Пример-иллюстрация + раскрытие примера на основе текста + связка + пример-иллюстрация + раскрытие примера на основе текста</li>
                        <li>Позиция автора (Автор считает, что..)</li>
                        <li>Отношение к позиции автора (Я согласен с позицией автора..)</li>
                        <li>Итог (В заключение хочется сказать, что..)</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory1" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory1