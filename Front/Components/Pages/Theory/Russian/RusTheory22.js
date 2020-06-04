import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory21" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 22: Текст как речевое произведение. Смысловая и композиционная целостность текста</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с текстом: выделять в нем информацию и анализировать его.</p>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Прочитайте текст.</li>
                        <li>Прочитайте утверждение в задании.</li>
                        <li>Начните снова читать текст, пока не наткнетесь на предложения, отображающие суть прочитанного утверждения.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory23" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory