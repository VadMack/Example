import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory7" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 8: Синтаксические нормы русского языка</h1>
                    <br/>
                    <p>Для выполнения задания нужно знать типичные синтаксические ошибки русского языка.</p>
                    <ol>
                    <li>Недопустимо в одном предложении при помощи союза И соединять причастный оборот и придаточное определительное, начинающееся со слов КОТОРЫЙ, КОТОРАЯ, КОТОРОЕ, КОТОРЫЕ:<br/>
                    Неправильно: Парень, стоявший у входа, и который ждал друзей, был здесь первый раз.<br/>
                    Правильно: Парень, который у входа и который ждал своих друзей, был здесь первый раз.
                    </li>
                    <li>Недопустимо в одном предложении при помощи союза И соединять дополнение, выраженное ИМЕНЕМ СУЩЕСТВИТЕЛЬНЫМ, и придаточное предложение.<br/>
                    Неправильно: Экономисты говорят о снижении инфляции и что задержки зарплаты больше не будет.<br/>
                    Правильно: Экономисты говорят о том, что не предвидится снижение инфляиии и что
                    задержки зарплаты больше не будет.
                    </li>
                    <li>Недопустимо в одном предложении при помощи союза И соединять как однородные члены имя существительное и инфинитив.<br/>
                    Неправильно: Я обожаю кофе и пить чай.<br/>
                    Правильно: Я обожаю кофе и чай.
                    </li>
                    <li>Недопустимо в одном предложении при помощи союза И соединять два сказуемых, если идущее за ними имя существительное грамматически связано только с одним из них: нельзя, чтобы от глаголов-сказуемых к общему зависимому слову задавались разные вопросы.<br/>
                    Неправильно: Студент в своем докладе исследует (ЧТО?) и рассуждает (О ЧЁМ?) о тенденциях рынка.<br/>
                    Правильно: Студент в своем докладе исследует тенденции рынка и рассуждает о них.
                    </li>
                    <li>Недопустимо, чтобы части двойных союзов не только..., но и...; как ..., так ...
                    связывали разные понятия: части двойного союза должны соединять только однородные члены, выраженные словами одной части речи и отвечающие на один и тот же вопрос.
                    Неправильно: Для меня как важно хорошо сдать экзамены, так и получить красный аттестат.
                    Правильно: Для меня важно как хорошо сдать экзамены, так и получить красный аттестат.
                    </li>
                    <li>Части двойных союзов «не только ..., но и ...»; «как ..., так и...» являются постоянными. Недопустимо заменять никакие слова в их составе и создавать неправильные пары двойных союзов: «не только ..., а также ...» (вместо «не только..., но «...»); «как ..., а также ...»(вместо «как ..., так и...»).<br/>
                    Неправильно: Для меня как важно хорошо сдать экзамены, а также получить красный аттестат.<br/>
                    Правильно: Для меня важно как хорошо сдать экзамены, так и получить красный аттестат.

                    </li>
                    <li>Недопустимо, чтобы однородные члены, следующие за обобщающим словом, стояли НЕ в том же падеже, что и обобщающее слово.<br/>
                    Неправильно: На этом рынке торгуют экзотическими фруктами: ананас, арбуз, кокос.<br/>
                    Правильно: На этом рынке торгуют экзотическими фруктами: ананасами, арбузами, кокосами.
                    </li>
                    <li>Недопустимо, чтобы при перечислении однородных членов были опущены разные предлоги.<br/>
                    Неправильно: В начале апреля было пусто везде: на улицах, площадях, парках.<br/>
                    Правильно: В начале апреля было пусто везде: на улицах, площадях, в парках.
                    </li>
                    <li>Недопустимо помещать определяемое слово ВНУТРЬ причастного оборота: причастный оборот должен полностью стоять до или после определяемого слова и не должен разрываться им на части.<br/>
                    Неправильно: Создавший студент сайт, стал впоследствии миллиардером.<br/>
                    Правильно: Студент, создавший сайт, стал впоследствии миллиардером.
                    </li>
                    <li>Недопустимо, чтобы определяемое слово и причастие были употреблены в разном роде, числе и падеже:<br/>
                    Неправильно: Одно из чудес на Курильской гряде, привлекающих туристов со всего света, связано с гейзерами и вулка­нами.<br/>
                    Правильно: Одно из чудес на Курильской гряде, привлекающее туристов со всего света, связано с гейзерами и вулканами.
                    </li>
                    <li>Недопустимо употреблять в предложении причастный оборот ПОСЛЕ имени существитель­ного, которое не является определяемым словом для этого причастного оборота.<br/>
                    Неправильно: Ученики долго не могли найти свое место, приехавшие в театр первый раз.<br/>
                    Правильно: Ученики, приехавшие в театр первый раз, долго не могли найти свое место.
                    </li>
                    <li>Грамматически неправильным является такое предложение, в котором действие, выраженное глаголом-сказуемым, и действие, выраженное деепричастием, совершаются разными лицами.<br/>
                    Неправильно: Возвращаясь домой, Бориса застиг ливень.<br/>
                    Правильно: Возвращаясь домой, Борис попал под ливень.
                    </li>
                    <li>Название, заключенное в кавычки и данное вместе с родовым словом («повесть», «рассказ», «книга», «роман», и т.д.), является несогласованным приложением и должно стоять в именительном падеже.<br/>
                    Неправильно: В романе “Войне и мире” есть как выдуманные герои, так и реальные.<br/>
                    Правильно: В романе “Война и мир” есть как выдуманные герои, так и реальные.
                    </li>
                    <li>После предлогов БЛАГОДАРЯ, СОГЛАСНО, ВОПРЕКИ, ПОДОБНО, НАПЕРЕКОР, НАПЕРЕРЕЗ имена существительные употребляются только в форме дательного падежа.<br/>
                    Неправильно: Наперекор (Кого? Чего?) обычая даже у трактира не было заметно оживления. <br/>
                    Правильно:  Наперекор (Кому? Чему?) обычаю даже у трактира не было заметно оживления.
                    </li>
                    <li>После предлога ПО в значении «после чего-либо» имя существительное употребляется в форме предлож­ного падежа.<br/>
                    Неправильно: По прибытию в Москву, мы решили перекусить.<br/>
                    Правильно: По прибытии в Москву, мы решили перекусить
                    </li>
                    <li>В сложноподчинённых предложениях, построенных по модели «ТЕ, КТО...», «ВСЕ, КТО ...», при подлежащем КТО глагол-сказуемое ставится в единственном числе, а при подлежащих ТЕ (ВСЕ) глаголы-сказуемые употребляются во множественном числе.<br/>
                    Неправильно: Все, кто пришли на мероприятие, получили небольшие подарки.<br/>
                    Правильно: Все, кто пришел на мероприятие, получили небольшие подарки.
                    </li>
                    <li>Недопустимо смешивать в одном предложении прямую и косвенную речь.<br/>
                    Неправильно: Преподаватель поинтересовался, что кто отсутствует в аудитории.<br/>
                    Правильно: Преподаватель поинтересовался,  кто отсутствует в аудитории.
                    </li>
                    <li>Недопустимо при переводе прямой речи в косвенную в придаточной части употреблять личное местоимение «Я»<br/>
                    Неправильно: В своих воспоминаниях Короленко писал, что всегда «Я видел в лице Чехова несомненную интеллигентность».<br/>
                    Правильно: В своих воспоминаниях Короленко писал, что ОН всегда «видел в лице Чехова несомненную интеллигентность».
                    </li>
                    <li>Необходимо соблюдать видовременную соотнесенность глаголов-сказуемых в связном тексте.<br/>
                    Неправильно: Мой друг каждый день рисует и повышал уровень мастерства.<br/>
                    Правильно: Мой друг каждый день рисует и повышает уровень мастерства.
                    </li>
                    </ol>
                    <h5>Алгоритм выполнения задания:</h5>
                    <ol>
                        <li>Прочитайте каждое предложение.</li>
                        <li>Каждое предложение сравните поочередно с предложенными ошибками.</li>
                        <li>Сопоставив предложение и ошибку, зачеркните их и перейдите к следующему предложению.</li>
                    </ol>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory9" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory