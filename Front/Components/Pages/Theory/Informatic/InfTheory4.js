import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory3" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 4: Работа с базами данных и файловой системой</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь анализировать таблицы и знать типы масок в файловой системе.</p>
                    <p><b>Типы масок:</b></p>
                    <p>1) Маска ? - означает пропуск 1 символа, то есть ?ask.txt обязательно может быть, например, mask.txt, но не может быть ask.txt или mmmask.txt<br/>
                       2) Маска * - означает пропуск нескольких символов или отсутствие символа. То есть *ask.txt может быть, например, ask.txt или mmmmask.txt
                    </p>
                    <p>Имя файла состоит из двух частей: название файла и его расширение. В файле <i>example.txt</i> example - название файла, txt - расширение. Название и расширение всегда разделяет точка. </p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory5" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

