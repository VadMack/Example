import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory9" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 10: Правописание приставок</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать правила написания приставок и некоторых букв после приставок.</p>
                    <ol>
                    <li>Неизменяемые приставки<br/>
                    Приставки НАД-, ПОД-, ПРЕД-, БЛИЗ-, ОБ-, ОТ-, НА-, ЗА-, НАИ-, ПО-, ДО-, НЕДО-, С- пишутся всегда одинаково. Приставки З- в русском языке не существует!
                    </li>
                    <li>Изменяемые приставки, оканчивающиеся на буквы З- и С-<br/>
                    Правописание приставок БЕЗ-, БЕС-, ВОЗ-, ВОС-, ВЗ-, ВС-, ИЗ-, ИС-, НИЗ-НИС, РАЗ-, РАС-, ЧЕРЕЗ-, ЧЕРЕС-, ЧРЕЗ-, ЧРЕС подчиняется следующим правилам:<br/>
                    Приставка оканчивается на -З-, если после нее идет звонкая согласная.<br/>
                    Приставка оканчивается на -С-, если после нее идет глухая согласная.<br/>
                    Правописание гласных в приставках РАЗ-, РОЗ-, РАС-, РОС- зависит от ударения: под ударением пишется буква О, без ударения буква А. Исключение: РОЗыскной.
                    </li>
                    <li>Правописание приставок ДЕЗ-, ДИЗ-, ДИС-<br/>
                    Приставки ДЕЗ-, ДИЗ- пишутся перед гласными и перед Ъ<br/>
                    Приставка ДИС пишется перед согласными
                    </li>
                    <li>Правописание приставок ПРИ-, ПРЕ<br/>
                    Приставка ПРИ- пишется, если слово означает:<br/>
                    а) Приближение (приехать, прийти, прилететь)<br/>
                    б) Присоединение (приклеить)<br/>
                    в) Полноту действия (придумать)<br/>
                    г) Неполноту действия (присесть, приуныть)<br/>
                    д) Пространственную близость (приморский)<br/>
                    е) Сопутствующее действие (пританцовывать)<br/>
                    <br/>
                    Приставка ПРЕ- пишется, если:<br/>
                    а) Приставку ПРЕ- можно заменить словами ОЧЕНЬ, ВЕСЬМА (премудрый - очень мудрый)<br/>
                    б) Приставка ПРЕ- близка к приставке ПЕРЕ- (преграда = перегородить)
                    </li>
                    <li>Правописание букв И, Ы после приставок<br/>
                    Буква И пишется в следующих случаях:<br/>
                    а) После иноязычных приставок и русских приставок СВЕРХ-, МЕЖ- (дезинфекция)<br/>
                    б) После приставок, оканчивающихся на гласную (поистине)<br/>
                    в) В сложных словах (пединститут)<br/>
                    г) В слове ВЗИМАТЬ<br/>
                    <br/>
                    Буква Ы пишется в после русских приставок, оканчивающихся на согласную (подыскать)
                    </li>
                    <li>Правописание твердого и мягкого знака после приставок<br/>
                    Твердый знак после приставок пишется в следующих случаях:<br/>
                    а) После русскоязычных приставок, оканчивающихся на согласную перед буквами Е, Ё, Ю, Я (подъём)<br/>
                    б) В сложных словах, первую часть которых образуют числительные ДВУХ-, ТРЕХ-, ЧЕТЫРЕХ-, перед буквами Е, Ё, Ю, Я (трехъярусный)<br/>
                    в) После иноязычных приставок, оканчивающихся на согласную (субъект)<br/>
                    <br/>
                    Мягкий знак после приставок пишется в следующих случаях:<br/>
                    а) Внутри слова перед буквами Е, Ё, И, Ю, Я (вьюга)<br/>
                    б) В некоторых иноязычных словах перед буквой О (батальон, шампиньон)
                    </li>
                    </ol>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Прочитайте каждое слово.</li>
                        <li>Определите, к какому из перечисленных правил оно относится.</li>
                        <li>Вставьте соответствующую букв.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory11" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory