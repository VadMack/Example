import React, {Component} from "react";
import ButtonBar from "../Elements/ButtonBar"
import {Button} from "react-bootstrap";


class SubjectBar extends Component {

    render() {
        let sbj = this.props.match.params.sbj;

        let accentButton;
        if (sbj === "rus") {
            accentButton = <Button variant="dark" className="font-oswald" href="/accentstraining" style={{
                backgroundColor: "#ffff00",
                color: "#474747",
                borderRadius: "2px"
            }}> Тренировка ударений </Button>
        }
        return (

            <div align="center" className="font-oswald" style={{backgroundColor: "#ffff00", minHeight: "100vh"}}>
                <div style={{fontSize: "30px", height: "31vh"}}>
                    <div style={{color: "black"}}>
                        Список вариантов
                    </div>
                    <ButtonBar subject={sbj} type="variant" isLimited={true}/>
                    <a href={"/allVariants/" + sbj} style={{color: "black", fontSize: "15px"}}>
                        Перейти к полному списку вариантов
                    </a>
                </div>
                <div style={{backgroundColor: "#474747", fontSize: "30px"}}>
                    <div style={{color: "#ffff00"}}>
                        Марафон
                    </div>
                    <div style={{color: "#ffff00", fontSize: "15px"}}>
                        Выберите задание, которое хотите отработать
                    </div>
                    <ButtonBar subject={sbj} type="exercises" isLimited={false}/>
                </div>
                <div style={{fontSize: "30px", minHeight: "31vh"}}>
                    <div style={{color: "black"}}>
                        Теоретические материалы
                    </div>
                    <ButtonBar subject={sbj} type="exercises" isTheory={true} isLimited={false}/>
                    {accentButton}
                </div>

            </div>


        )
    }

}

export default SubjectBar