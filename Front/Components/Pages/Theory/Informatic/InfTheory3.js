import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory2" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 3: Анализ схем и таблиц</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать с таблицами и графами.</p>
                    <p><b>Решим типичное задание:</b></p>
                    <p>На рисунке слева изображена схема дорог. В таблице
                    звёздочкой обозначено наличие дороги из одного населённого пункта
                    в другой. Отсутствие звёздочки означает, что такой дороги нет.\n
                    Каждому населённому пункту на схеме соответствует его номер в таблице,
                    но неизвестно, какой именно номер. Определите, какие номера населённых
                    пунктов в таблице могут соответствовать населённым пунктам E и G на
                    схеме. В ответе запишите эти два номера в возрастающем порядке без
                    пробелов и знаков препинания.</p>
                    <img className={"material"} src = "https://sun9-43.userapi.com/c857016/v857016622/1a41cf/Po9G9oa5NpQ.jpg"/>
                    <p><b>Решение: </b></p>
                    <p>1) Определим, какой из пунктов - А: только от пункта А идет 4 дороги => П2 это А<br/>
                       2) Определим пункты C и F: только от них идет две дороги => это П1 и П3<br/>
                       3) Определим пункты E и G: они соединены с А, B, D и между собой: то есть они соеденены с П2 и с любыми пунктами, кроме П1 и П3 и от них идет 3 дороги. Замечаем, что это П4 и П5<br/>
                    </p>
                    <h5><b>Ответ: 45</b></h5>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory4" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory
