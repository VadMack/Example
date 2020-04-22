import React, {Component} from "react";
import ButtonBar from "../Elements/ButtonBar"



class RussianMenu extends Component {

    render() {
        return (

            <div align="center" className="font-oswald" style={{backgroundColor: "#ffff00"}}>
                <div style={{fontSize: "30px", height: "31vh"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Список вариантов
                    </a>
                    <ButtonBar subject="rus" type="" isLimited="1"/>
                    <a href={"/allVariants"} style={{color: "black", fontSize: "15px"}}>
                        Перейти к полному списку вариантов
                    </a>
                </div>
                <div style={{backgroundColor: "#474747", fontSize: "30px", height: "31vh"}}>
                    <a href={"/"} style={{color: "#ffff00"}}>
                        SmartExam алгоритм
                    </a>
                    <div style={{color: "#ffff00", fontSize: "15px"}}>
                        Выберите задание, которое хотите отработать
                    </div>
                </div>
                <div style={{fontSize: "30px", height: "31vh"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Теоретические материалы
                    </a>
                </div>

            </div>


        )
    }

}

export default RussianMenu