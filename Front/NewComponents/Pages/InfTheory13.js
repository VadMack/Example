import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory12" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 13: Кодирование и информации</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь кодировать информацию.</p>
                    <p>Для кодирования K символов требуется N бит, где N - наименьшее целое число, удовлетворяющее условию K меньше 2^N. То есть для кодирования 14 символов требуется 4 бита, так как 14 меньше 2^4.</p>
                    <p>Чтобы найти информационный объем, нужно умножить количество символов на количество бит на символ.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory14" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

