import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory25" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 26: Языковые средства выразительности</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать все средства выразительности в речи.</p>
                    <ol>
                    <li>Анафора — начало предложений или соседних отрезков текста с одних и тех же слов или словосочетаний.</li>
                    <li>Антитеза (противопоставление) — резкое противопоставление понятий или образов.</li>
                    <li>Вопросно-ответная форма изложения — форма изложения, когда за вопросительным предложением идет ответ на него.</li>
                    <li>Гипербола — намеренное чрезмерное преувеличение чего-либо. </li>
                    <li>Градация — постепенное наращивание или ослабление смыслового или эмоционального значения слов.</li>
                    <li>Инверсия — изменение порядка расположения слов в предложении на обратный.</li>
                    <li>Ирония — скрытая насмешка автора над чем-либо.</li>
                    <li>Лексический повтор — намеренное повторение один и тех же слов или словосочетаний.</li>
                    <li>Литота — намеренное чрезмерное преуменьшение чего-либо.</li>
                    <li>Метонимия — замена слова или словосочетания на другое, перенос наименования с одного предмета или явления на другой на основе смежности.</li>
                    <li>Метафора — слово или выражение, употребляемое в переносном значении, в основе которого лежит сравнение неназванного предмета или явления с каким-либо другим на основании их общего признака.</li>
                    <li>Оксюморон — сочетание слов, противоположных по смыслу.</li>
                    <li>Олицетворение — придание неживому объекту свойств, качеств, действий человека.</li>
                    <li>Парцеляция — дробление предложения с помощью точки на несколько маленьких.</li>
                    <li>Перифраза — непрямое, описательное обозначение объекта на основе выделения какого-либо его качества, признака, особенностей.</li>
                    <li>Риторический вопрос — вопрос, на который нет ответа.</li>
                    <li>Риторическое обращение — эмоциональное обращение к читателю.</li>
                    <li>Синекдоха — название части вместо названия целого, частного вместо общего и наоборот.</li>
                    <li>Сравнение — сопоставление в текст двух явлений или предметов.</li>
                    <li>Синтаксический параллелизм (параллелизм) — повторение один и тех же слов или словосочетаний в разных предложениях.</li>
                    <li>Фразеологизм — устойчивые словосочетания, фраза.</li>
                    <li>Эллипсис — намеренный пропуск слов, не существенных для смысла выражения.</li>
                    <li>Эпитет — определение, прибавляемое к названию предмета для большей изобразительности.</li>
                    <li>Эпифора — конец предложений или соседних отрезков текста одними и теми же словами или словосочетаниями.</li>
                    </ol>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Внимательно прочитайте указанное предложение(ия).</li>
                        <li>Определите, какое из средств выразительности представлено в предложении.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "Menu" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory