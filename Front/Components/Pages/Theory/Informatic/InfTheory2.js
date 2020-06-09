import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory1" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 2: Анализ таблиц истинности логических выражений</h1>
                    <br/>
                    <p>Для выполнения задания необходимо знать законы алгебры логики и значения логических функций.</p>
                    <p>Таблица представления десятичных чисел в СС с основанием степени двойки:</p>
                    <table>
                        <tr>
                            <td>A</td>
                            <td>B</td>
                            <td>¬A</td>
                            <td>A /\ B</td>
                            <td>A \/ B</td>
                            <td>A → B</td>
                            <td>A ⟷ B</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </table>
                    <p>Основные законы алгебры логики:</p>
                    <table>
                        <tr>
                            <td>Название</td>
                            <td style = {{textAlign: "center"}}>Для И</td>
                            <td style = {{textAlign: "center"}}>Для ИЛИ</td>
                        </tr>
                        <tr>
                            <td>Двойного отрицания</td>
                            <td colSpan="2" style = {{textAlign: "center"}}>¬(¬A) = A</td>
                        </tr>
                        <tr>
                            <td>Исключение третьего</td>
                            <td>A /\¬A = 0</td>
                            <td>A \/ ¬A = 1</td>
                        </tr>
                        <tr>
                            <td>Операции с константами</td>
                            <td>A /\ 0 = 0 A /\ 1 = A</td>
                            <td>A \/ 0 = A A \/ 1 = 1</td>
                        </tr>
                        <tr>
                            <td>Повторения</td>
                            <td>A /\ A = A</td>
                            <td>A \/ A = A</td>
                        </tr>
                        <tr>
                            <td>Поглощения</td>
                            <td>A /\ (A \/ B) = A</td>
                            <td>A \/ A /\ B = A</td>
                        </tr>
                        <tr>
                            <td>Переместительный</td>
                            <td>A /\ B = B /\ A</td>
                            <td>A \/ B = B \/ A</td>
                        </tr>
                        <tr>
                            <td>Сочетательный</td>
                            <td>A /\ (B /\ C) = (A /\ B) /\ C</td>
                            <td>A \/ (B \/ C) = (A \/ B) \/ C</td>
                        </tr>
                        <tr>
                            <td>Распределительный</td>
                            <td>A \/ B /\ C = (A \/ B) /\ (A \/ C)</td>
                            <td>A /\ (B \/ C) = (A /\ B) \/ (A /\ C)</td>
                        </tr>
                        <tr>
                            <td>Законы де Моргана</td>
                            <td>¬(A /\ B) = ¬A \/ ¬B</td>
                            <td>¬(A \/ B) = ¬A /\ ¬B</td>
                        </tr>
                    </table>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory3" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

