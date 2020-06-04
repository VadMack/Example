import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory16" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>
                <span  className="theory">
                    <h1>Задание 17: Поиск информации в интернете</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с кругами Эйлера.</p>
                    <p>При выполнении 17 задания удобно таблицу представлять в виде кругов Эйлера.</p>
                    <p>Рассмотрим следующие круги: </p>
                    <img className={"material"} src = "https://sun9-25.userapi.com/c853524/v853524050/23ab00/7yqmPp88nBM.jpg"/>
                    <p>Здесь каждый круг - отдельный интернет запрос. Первый интернет запрос = A + B, второй интернет запрос = B + C. <br/>
                    Первый интернет запрос & второй интернет запрос = B. Если первый интернет запрос & второй интернет запрос = 0, то круги не пересекаются.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory18" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

