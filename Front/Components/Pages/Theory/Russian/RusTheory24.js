import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory23" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 24: Лексическое значение слова. Синонимы. Антонимы. Омонимы. Фразеологические обороты. Группы слов по происхождению и употреблению</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать лексические средства выразительности.</p>
                    <ol>
                    <li>Антонимы — слова, противоположные по значению: Большой — маленький.</li>
                    <li>Контекстные антонимы — слова, противоположные по значению только в данном тексте: Война между красными и белыми (красные и белые являются антонимами, так как в данном случае это две абсолютно противоположные стороны).</li>
                    <li>Синонимы — слова, близкие по значению, но разные по написанию: Умный — смышленый.</li>
                    <li>Контекстные синонимы — слова, близкие по значению только в данном тексте: У нее богатый, большой внутренний мир. (В этом тексте богатый и большой являются контекстными синонимами)</li>
                    <li>Переносное значение слова — значение слова, которое возникло на основе прямого: Железное здоровье (= крепкое, как железные гвозди).</li>
                    <li>Просторечные слова — слова, которые употребляются в разговорной речи, среди простого населения: Дрыхнуть, брюхо, бузить, брехня.</li>
                    <li>Устаревшие слова — слова, вышедшие из употребления: Чело, око, уста.</li>
                    <li>Фразеологизм — устойчивые словосочетания, фраза: Мастер на все руки.</li>
                    </ol>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Перейдите к предложениям, указанным в утверждениях.</li>
                        <li>Проверьте, какие слова подходят под определения, написанные выше и выпишите их.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory25" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory