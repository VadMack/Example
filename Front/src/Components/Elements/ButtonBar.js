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
        fetch(config.ip + "/" + sbj + "/variant.getCount/")
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
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                this.generate(this.state.count)
            );
        }
    }

    generate(numOfButtons) {

        if (this.props.isLimited === "1" && numOfButtons > 10) {
            numOfButtons = 10;
        }

        let buttons = [];
        let barS = [];
        let counter = 1;
        for (let i = 0; i < numOfButtons; i++) {
            buttons[i] = (
                <Button href={"/variants/" + this.props.subject + "/" + counter} variant="dark" className="button-style3"> {counter++} </Button>
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
            barS[i] = (<div>
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