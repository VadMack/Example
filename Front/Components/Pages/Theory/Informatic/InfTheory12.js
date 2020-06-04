import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory11" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 12: Устройство компьютерных сетей</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать правило, по которому определяется адрес сети.</p>
                    <p>Адрес сети применяется путем наложения маски на IP адрес сети. Наложить маску на адрес сети означает выполнить поразрядное умножение двоичного представления каждого байта. <br/>В маске всегда сначала идут единицы, а потом нули.</p>
                    <p>Рассмотрим пример: <br/><pre>IP:         213.180.193.3 <br/>Mask:       255.255.0.0 <br/>Адрес сети: 213.180.0.0</pre></p>
                    <p>Применим поразрядное умножение: <br/><pre>IP:         11010101.10110100.10000001.00000011<br/>Mask:       11111111.11111111.00000000.00000000<br/>Адрес сети: 11010101.10110100.00000000.00000000</pre></p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory13" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

