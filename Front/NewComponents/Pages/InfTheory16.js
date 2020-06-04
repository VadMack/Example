import React, {Component} from "react";
import "../Styles/theoryPage.css"

class RussianTheory extends Component {
    render() {
        return (
            <div className = "mainBlock">

                <div className = "arrowToLeft" width = "50px">
                    <a id = "linkLeft" href = "inftheory15" title={"Теория к предыдущему заданию"} className = "linkToTheory"><b>&#171;</b></a>
                </div>

                <span  className="theory">
                    <h1>Задание 16: Системы счисления</h1>
                    <br/>
                    <p>Для выполнения задания необходимо уметь работать в различных системах счисления.</p>
                    <p>Сложение и вычитание чисел во всех системах счисления происходит по тем же правилам, что и при работе с десятичной системой счисления.</p>
                    <p>В системе счисления с основанием N запись десятичного числа N^K будет иметь вид 10^K.</p>
                    <p>Для перевода числа из N системы счисления в десятичную нужно справа налево расставить над каждым разряды (начиная с 0), а затем каждое число в разряде умножить на основание системы счисления в степени разряда. Так 1101 это 1*2^3+1*2^2+0*2^1+1*2^0 = 13</p>
                </span>

                <div className = "arrowToRight">
                    <a id = "linkRight" href = "inftheory17" title={"Теория к следующему заданию"} className = "linkToTheory"><b>&#187;</b></a>
                </div>

            </div>
        )
    }
}

export default RussianTheory

