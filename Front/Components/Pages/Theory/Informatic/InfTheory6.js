import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory5" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 6: Исполнители алгоритмов</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь анализировать алгоритмы.</p>
                    <p>Чаще всего эти задания решаются осознанным перебором, то есть, если в задании есть две команды: прибавить 3 и умножить на 2, а конечное число нечетное, то последней командой будет, очевидно, "прибавить 3"</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory7" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

