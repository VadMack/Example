import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory1 extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory27" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 1: Выявление главной информации текста</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с текстом.</p>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Внимательно прочитайте текст.</li>
                        <li>Выделите в каждом предложении ключевые слова.</li>
                        <li>Ориентируясь на ключевые слова, составьте собственное предложение, которое будет кратким пересказом исходного текста.</li>
                        <li>Из вариантов ответов исключите предложения, содержащие</li>
                            <ul>
                                <li>информацию, которой нет в тексте</li>
                                <li>информацию, противоречащую содержанию текста</li>
                            </ul>
                        <li>Из оставшихся предложений выберете наиболее похожие к вашему собственному.</li>
                    </ol>
                    <p>Лайфхак: Часто верные варианты ответов похожи друг на друга, отличие заключается лишь в речевых оборотах и перестановке слов.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory2" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory1