import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory8" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 9: Правописание гласных в корне слова</h1>
                    <br/>
                    <p>Для выполнения задания нужно знать правила для проверяемой безударной гласной в корне, для чередующихся корней, слова с непроверяемой безударной гласной в корне.</p>
                    <ol>
                    <li>Безударные гласные<br/>
                    Проверить правописание можно изменив форму слова:<br/>
                    У существительных нужно изменить число,<br/>
                    У прилагательных форму с полной на краткую,<br/>
                    У глаголов род, время, число.
                    </li>
                    <li>Чередующиеся корни<br/>
                    Правописание зависит от ударения в следующих корнях:<br/>
                    ГАР-ГОР (под ударением А, без ударения О)<br/>
                    КЛАН-КЛОН (под ударением то, что слышится, без ударения О)<br/>
                    ТВАР-ТВОР  (под ударением то, что слышится, без ударения О)<br/>
                    ЗАР-ЗОР  (под ударением то, что слышится, без ударения А)<br/>
                    Исключения: пригарь, выгарки, изгарь, утварь, зоревать.<br/>
                    <br/>
                    Правописание зависит от корня после суффикса:<br/>
                    БИР-БЕР, БЛИСТ-БЛЕСТ, ДИР-ДЕР, ЖИГ-ЖЕГ, МИР-МЕР, ПИР-ПЕР, ТИР-ТЕР, ЧИТ-ЧЕТ (пишется И, если после корня идет суффикс А, иначе пишется Е)<br/>
                    КАС-КОС (пишется А, если после корня идет суффикс А, иначе пишется Е) <br/>
                    А(Я)-ИМ(ИН) (пишется ИМ(ИН), если после корня идет суффикс А, иначе пишется А(Я))<br/>
                    Исключения: сочетание, сочетать, чета.<br/>
                    <br/>
                    Правописание зависит от смысла слова:<br/>
                    РАВН (равный, одинаковый) - РОВН (ровный)<br/>
                    МАК (погрузить в жидкость) - МОК, МОЧ (стать мокрым, способность пропускать жидкость)<br/>
                    ПЛАВ-ПЛОВ  (ПЛОВ пишется только в словах пловец, пловчиха, в других словах всегда ПЛАВ!)<br/>
                    <br/>
                    Правописание зависит от последних букв корня:<br/>
                    РАСТ-РАЩ-РОС <br/>
                    ЛАГ-ЛОЖ<br/>
                    СКАК-СКОЧ<br/>
                    Исключения: полог, Ростов, Ростислав, ростовщик, рост, на вырост, отрасль, скачок, скачкообразный, скачи.
                    </li>
                    <li>Непроверяемые безударные гласные.<br/>
                    Их следует знать! Наиболее распространенные: авангард, апартаменты, аплодисменты, апелляция, багаж, бойкот, вакансия, винегрет, горизонт, кавычки, каламбур, меценат, оригинальный, панорама, регламент, резиденция, теория, эксперимент, элемент.
                    </li>
                    </ol>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Прочитав слово, подумайте, к какому из трех перечисленных правил оно относится.</li>
                        <li>Поставьте соответствующую метку у слова и проделайте то же самое со всеми остальными словами.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory10" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory