import React, {Component} from "react";
import "../../../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "rustheory2" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                <h1>Задание 1: Операции над числами в разных системах счисления</h1>
                <br/>
                <p>Для выполнения задания необходимо уметь складывать и вычитать числа в разных системах счисления.</p>
                <p>Таблица представления десятичных чисел в СС с основанием степени двойки.</p>
                <table>
                    <tr>
                        <td>Десятичное число</td>
                        <td>Двоичное число</td>
                        <td>Восьмеричное число</td>
                        <td>Шестнадцатеричное число</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0000</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0001</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>0010</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>0011</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>0100</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>0101</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>0110</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>0111</td>
                        <td>7</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>1000</td>
                        <td>10</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>1001</td>
                        <td>11</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>1010</td>
                        <td>12</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>1011</td>
                        <td>13</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>1100</td>
                        <td>14</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>1101</td>
                        <td>15</td>
                        <td>D</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>1110</td>
                        <td>16</td>
                        <td>E</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>1111</td>
                        <td>17</td>
                        <td>F</td>
                    </tr>
                </table>
                    <p>Сложение и вычитание чисел во всех системах счисления происходит по тем же правилам, что и при работе с десятичной системой счисления.</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory2" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

