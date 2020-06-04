import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory11" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 12: Правописание личных окончаний глаголов и суффиксов причастий</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать спряжения глаголов и правила написания личных окончаний глаголов и суффиксов причастий.</p>
                    <ol>
                        <li>
                            Спряжения глаголов<br/>
                            I спряжение: Все глаголы, оканчивающиеся на -ать, -оть, -уть, -еть, -ть + брить, стелить зиждиться<br/>
                            II спряжение: все глаголы, оканчивающиеся на -ить + глаголы исключения дышать, держать, гнать, видеть, ненавидеть, слышать, вертеть, смотреть, обидеть, зависеть, терпеть.<br/>
                            <br/>
                            <p>Глаголы первого спряжения имеют на окончаниях буквы Е, У, Ю, второго спряжения имеют на окончаниях буквы А, И, Я.</p>
                            <table>
                            <tr>
                                <td></td>
                                <td colSpan={2} style = {{textAlign: "center"}}>I спряжение</td>
                                <td colSpan={2} style = {{textAlign: "center"}}>II спряжение</td>
                            </tr>
                            <tr>
                                <td>Род</td>
                                <td>Ед. число</td>
                                <td>Мн. число</td>
                                <td>Ед. число</td>
                                <td>Мн. число</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>-У, -Ю</td>
                                <td>-ЕМ, -ЁМ</td>
                                <td>-У, -Ю</td>
                                <td>-ИМ</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>-ЕШЬ, -ЁШЬ</td>
                                <td>-ЕТЕ, -ЁТЕ</td>
                                <td>-ИШЬ</td>
                                <td>-ИТЕ</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>-ЕТ, -ЁТ</td>
                                <td>-УТ, -ЮТ</td>
                                <td>-ИТ</td>
                                <td>-АТ, -ЯТ</td>
                            </tr>
                        </table>
                        </li>
                        <li>Правописание суффиксов действительных причастий настоящего времени<br/>
                        Если исходный глагол I спряжения, то на пишутся суффиксы -УЩ-, -ЮЩ-<br/>
                        Если исходный глагол II спряжения, то на пишутся суффиксы -АЩ-, -ЯЩ-
                        </li>
                        <li>Правописание суффиксов страдательных причастий настоящего времени<br/>
                        Если исходный глагол I спряжения, то на пишется суффикс -ЕМ-,<br/>
                        Если исходный глагол II спряжения, то на пишется суффикс -ИМ-
                        </li>
                        <li>Перед суффиксов -ВШ- действительных причастий настоящего времени пишется та же буква, что и перед ТЬ в инфинитиве.</li>
                        <li>Правописание суффиксов страдательных причастий прошедшего времени<br/>
                        Если исходная форма глагола оканчивается на -ЕТЬ, -ИТЬ, то в суффиксе пишется -ЕНН-<br/>
                        Если Если исходная форма глагола оканчивается на -АТЬ, -ЯТЬ, то в суффиксе пишется -АНН-, -ЯНН- (перед -НН- пишется та же гласная, что и в окончании исходной формы глагола).
                        </li>
                    </ol>

                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Прочитайте слово.</li>
                        <li>Определите, какой частью речи оно является.</li>
                        <li>Подберите для него подходящее правило и вставьте нужную букву.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory13" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory