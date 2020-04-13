import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Figure} from "react-bootstrap";
import {Card} from "react-bootstrap";

const bar1 = [];
const bar2 = [];
let counter = 1;
for (let i = 0; i < 2; i++) {
    bar1[i] = (
        <div>
            <Button variant="dark" className="button-style2"> {counter++} </Button>
            <Button variant="dark" className="button-style2"> {counter++} </Button>
            <Button variant="dark" className="button-style2"> {counter++} </Button>
            <Button variant="dark" className="button-style2"> {counter++} </Button>
            <Button variant="dark" className="button-style2"> {counter++} </Button>
        </div>
    );
}
counter = 0;
for (let i = 0; i < 6; i++) {
    bar2[i] = (
        <div>
            <Button variant="dark" className="button-style3"> {counter++} </Button>
            <Button variant="dark" className="button-style3"> {counter++} </Button>
            <Button variant="dark" className="button-style3"> {counter++} </Button>
            <Button variant="dark" className="button-style3"> {counter++} </Button>
            <Button variant="dark" className="button-style3"> {counter++} </Button>
        </div>
    );
}

class RussianMenu extends Component {
    render() {
        return (

            <div align="center" className="font-oswald">
                <div style={{fontSize: "30px", backgroundColor:"#ffff00", height:"150px"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Список вариантов
                    </a>
                    <div>{bar1}</div>
                </div>
                <div style={{backgroundColor:"#474747", fontSize: "30px", height:"380px"}}>
                    <a href={"/"} style={{color: "#ffff00"}}>
                        SmartExam алгоритм
                    </a>
                    <div style={{color:"#ffff00", fontSize:"15px"}}>
                        Выберите задание, которое хотите отработать
                    </div>
                    <div>{bar2}</div>
                </div>
                <div style={{fontSize: "30px", backgroundColor:"#ffff00", height:"150px"}}>
                    <a href={"/"} style={{color: "black"}}>
                        Теоретические материалы
                    </a>
                </div>



            </div>


        )
    }
}

export default RussianMenu