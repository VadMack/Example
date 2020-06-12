import React from "react";
import {Button} from "react-bootstrap";
const config = require("../../config.js");

class ButtonBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        let sbj = this.props.subject;
        let type = this.props.type;


        fetch(config.ip + "/" + sbj + "/" + type + ".getCount")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        count: result.count
                    })
                    ;
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );

    }

    render() {
        const {error, isLoaded} = this.state;
        let textColor = "#474747";

        if (this.props.type === "task"){
            textColor = "#ffff00"
        }
        if (error) {
            return <div style={{color:textColor}}>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{color:textColor}}>Загрузка...</div>;
        } else {
            return (
                this.generate(this.state.count)
            );
        }
    }

    generate(numOfButtons) {

        if (this.props.isLimited && numOfButtons > 10) {
            numOfButtons = 10;
        }

        let buttons = [];
        let barS = [];
        let counter = 1;
        let key = 0;

        let url;
        if (this.props.type === "variant"){
            url = "/variants/" + this.props.subject + "/";
        }
        else {
            if (!this.props.isTheory) {
                url = "/marathon/" + this.props.subject + "/";
            }
            else {
                url = "/" + this.props.subject + "theory";
            }
        }

        for (let i = 0; i < numOfButtons; i++) {
            buttons[i] = (
                <Button  key={key++} href={url + counter} variant="dark" className="button-style3"> {counter++} </Button>
            );
        }

        let numOfString = Math.ceil(numOfButtons / 5);
        for (let i = 0; i < numOfString; ++i) {
            let string = [];
            let strLength = 5;
            if (i === numOfString - 1) {
                if (numOfButtons % strLength !== 0) {
                    strLength = numOfButtons % 5;
                }
            }
            for (let j = 0; j < strLength; j++) {
                string[j] = buttons[5 * i + j];
            }
            barS[i] = (<div key={key++}>
                {string}
            </div>)
        }

        return (
            <div>
                {barS}
            </div>
        )

    }


}

export default ButtonBar;