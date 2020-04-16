import React, {Component} from "react";
import {Button} from "react-bootstrap";
import ButtonBar from "./ButtonBar"
import {Figure} from "react-bootstrap";
import {Card} from "react-bootstrap";


class RussianMenu extends Component {

    render() {
        return (

            <div align="center" className="font-oswald">
                <div style={{fontSize: "30px", backgroundColor: "#ffff00", height: "190px"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Список вариантов
                    </a>
                    {/*{this.createBar()}*/}
                    <ButtonBar subject="rus" type="" isLimited="1"/>
                    <a href={"/Variants"} style={{color: "black", fontSize: "15px"}}>
                        Перейти к полному списку вариантов
                    </a>
                </div>
                <div style={{backgroundColor: "#474747", fontSize: "30px", height: "380px"}}>
                    <a href={"/"} style={{color: "#ffff00"}}>
                        SmartExam алгоритм
                    </a>
                    <div style={{color: "#ffff00", fontSize: "15px"}}>
                        Выберите задание, которое хотите отработать
                    </div>
                    <div></div>
                </div>
                <div style={{fontSize: "30px", backgroundColor: "#ffff00", height: "150px"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Теоретические материалы
                    </a>
                </div>

            </div>


        )
    }

}

export default RussianMenu