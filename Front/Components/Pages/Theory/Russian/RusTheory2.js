import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory1" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                <h1>Задание 2: Средства связи предложений в тексте.</h1>
                <br/>
                <p>Для выполнения задания необходимо знать части речи.</p>
                <p>Сочинительные союзы:</p>
                <table>
                <tr>
                    <td>Группа</td>
                    <td>Примеры</td>
                    <td>Использование</td>
                </tr>
                <tr>
                    <td>Соединительные</td>
                    <td>и; да(=и); не только, но и; также; тоже; и …, и; ни …, ни; как …, так и; не столько …, сколько</td>
                    <td>Используются для выражения одновременно или последовательно происходящих событий, явлений действительности</td>
                </tr>
                <tr>
                    <td>Противительные</td>
                    <td>а; но; да (=но); зато; однако; же</td>
                    <td>Выражают отношения противопоставления или разграничения</td>
                </tr>
                <tr>
                    <td>Разделительные</td>
                    <td>или; либо; то …, то; то ли …, то ли; не то …, не то</td>
                    <td>Вносят в предложение значения чередования, выбора, предложения, неразличения</td>
                </tr>
                </table>
                <p>Подчинительные союзы:</p>
                <table>
                <tr>
                    <td>Группа</td>
                    <td>Примеры</td>
                    <td>Использование</td>
                </tr>
                <tr>
                    <td>Изъяснительные</td>
                    <td>что; чтобы; как</td>
                    <td rowSpan={8}>Связывают в сложном (сложноподчиненном) предложении простые предложения, из которых от одного предложения к другому можно поставить вопрос.</td>
                </tr>
                <tr>
                    <td>Временные</td>
                    <td>Когда; лишь; едва; пока; как только; прежде чем; после того как; в то время как</td>
                </tr>
                <tr>
                    <td>Причинные</td>
                    <td>Потому что; оттого что; так как; ибо; ввиду того что; в связи с тем что; из-за того что; благодаря тому что</td>
                </tr>
                <tr>
                    <td>Целевые</td>
                    <td>Чтобы; дабы; для того чтобы; с тем чтобы</td>
                </tr>
                <tr>
                    <td>Условные</td>
                    <td>Если; ежели; коли; когда; когда бы; раз; ли; как скоро</td>
                </tr>
                <tr>
                    <td>Уступительные</td>
                    <td>Хотя; хоть; даром что; хотя бы; несмотря на то что; как ни; сколько ни; пусть; пускай</td>
                </tr>
                <tr>
                    <td>Сравнительные</td>
                    <td>Как; как будто; словно; точно; подобно тому как; чем</td>
                </tr>
                <tr>
                    <td>Следствия</td>
                    <td>Так что; вследствие чего</td>
                </tr>
                </table>
                <p>Частицы</p>
                <table>
                <tr>
                    <td>Отрицательные</td>
                    <td>не; ни</td>
                </tr>
                <tr>
                    <td>Формообразующие</td>
                    <td>пусть; пускай; да; бы (б); давай; давайте</td>
                </tr>
                <tr>
                    <td>Вопросительные</td>
                    <td>ли; разве; неужели; неужто</td>
                </tr>
                <tr>
                    <td>Восклицательные</td>
                    <td>что за; как</td>
                </tr>
                <tr>
                    <td>Указательные</td>
                    <td>вот; а вот; вон; а вон</td>
                </tr>
                <tr>
                    <td>Выражающие сомнение</td>
                    <td>вряд ли; едва ли</td>
                </tr>
                <tr>
                    <td>Уточняющие</td>
                    <td>как раз; именно; ведь</td>
                </tr>
                <tr>
                    <td>Выделительные (ограничительные)</td>
                    <td>только; лишь; особенно; исключительно; почти</td>
                </tr>
                <tr>
                    <td>Усилительные</td>
                    <td>даже; даже и; ведь; же; уж; всё-таки; ну</td>
                </tr>
                <tr>
                    <td>Смягчающие требование</td>
                    <td>-ка</td>
                </tr>
                </table>
                <p>Наречие</p>
                <table>
                <tr>
                    <td>Наречия</td>
                    <td>Отвечают на вопросы</td>
                    <td>Примеры</td>
                </tr>
                <tr>
                    <td>Образа и способа действия</td>
                    <td>Как? Каким образом?</td>
                    <td>по-разному; так; быстро; хорошо</td>
                </tr>
                <tr>
                    <td>Меры и степени</td>
                    <td>Сколько? В какой мере?</td>
                    <td>чуть-чуть; немного; вдвое; вдоволь; очень</td>
                </tr>
                <tr>
                    <td>Места</td>
                    <td>Где? Куда? Откуда?</td>
                    <td>вдали; вдалеке; кое-где; куда-то; издали</td>
                </tr>
                <tr>
                    <td>Времени</td>
                    <td>Когда? С каких пор?</td>
                    <td>сейчас; всегда; тогда; рано; завтра</td>
                </tr>
                <tr>
                    <td>Причины</td>
                    <td>Почему?</td>
                    <td>почему; оттого; потому; сгоряча</td>
                </tr>
                <tr>
                    <td>Цели</td>
                    <td>Зачем?</td>
                    <td>затем; нарочно; умышленно; назло; в шутку; на смех</td>
                </tr>
                </table>
                <p>Предлоги</p>
                <table>
                <tr>
                    <td colSpan = {4} style = {{textAlign: "center"}}>По структуре</td>
                </tr>
                <tr>
                    <td colSpan = {3} style = {{textAlign: "center"}}>Производные</td>
                    <td rowSpan = {2} style = {{textAlign: "center"}}>Непроизводные</td>
                </tr>
                <tr>
                    <td style = {{textAlign: "center"}}>Отыменные</td>
                    <td style = {{textAlign: "center"}}>Отглагольные</td>
                    <td style = {{textAlign: "center"}}>Наречные</td>
                </tr>
                <tr>
                    <td>Ввиду; в виде; в заключение; в продолжение; в течение; вследствие; на протяжении; наподобие</td>
                    <td>Несмотря на; благодаря; начиная с; спустя</td>
                    <td>Вблизи; навстречу; согласно; поперек</td>
                    <td>Без; между; в; для; перед; от; ради; через; из-за; из-под; близ; вместо; кроме; среди; сквозь</td>
                </tr>
                <tr>
                    <td colSpan = {4} style = {{textAlign: "center"}}>По составу</td>
                </tr>
                <tr>
                    <td style = {{textAlign: "center"}}>Простые</td>
                    <td style = {{textAlign: "center"}}>Простые</td>
                    <td style = {{textAlign: "center"}}>Сложные</td>
                    <td rowSpan = {2}></td>
                </tr>
                <tr>
                    <td>Вслед; после; мимо; путем; исключая</td>
                    <td>По причине; в связи с; во время</td>
                    <td>В зависимости от; исходя из; в соответствии с; не говоря о</td>
                </tr>
                </table>
                <p>Вводные слова и вводные словосочетания</p>
                <table>
                <tr>
                    <td>Вводное слово (словосочетание) выражает</td>
                    <td>Примеры</td>
                </tr>
                <tr>
                    <td>Уверенность</td>
                    <td>конечно; разумеется; несомненно; как правило; действительно</td>
                </tr>
                <tr>
                    <td>Неуверенность</td>
                    <td>наверное; вероятно; кажется; видимо; может быть; возможно</td>
                </tr>
                <tr>
                    <td>Чувства</td>
                    <td>к счастью; к несчастью; к сожалению; к  удивлению</td>
                </tr>
                <tr>
                    <td>Источник сообщения</td>
                    <td>по-моему; по моему мнению; говорят; по слухам</td>
                </tr>
                <tr>
                    <td>Порядок мыслей, их связь</td>
                    <td>во-первых; значит; так; итак; следовательно; таким образом; кстати;
                        наоборот; в частности; например; наконец; кроме того</td>
                </tr>
                <tr>
                    <td>Способ оформления мыслей</td>
                    <td>иными словами; короче говоря; так сказать; словом; одним словом; иначе говоря</td>
                </tr>
                <tr>
                    <td>Привлечение внимания</td>
                    <td>пожалуйста; послушайте; допустим; скажем</td>
                </tr>
                <tr>
                    <td>Степени обычности</td>
                    <td>бывало; бывает; по обыкновению; как правило</td>
                </tr>
                </table>

                <h5>Алгоритм выполнения задания:</h5>
                <ol>
                    <li>Внимательно прочитайте текст.</li>
                    <li>Определите смысл предложения с пропуском: оно противопоставляется предыдущему, дополняет его и т.д.?</li>
                    <li>Подставьте слово/словосочетание и перечитайте получившийся текст, чтобы убедиться в правильности подстановки.</li>
                </ol>
            </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "rustheory3" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

