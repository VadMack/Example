import React, {Component} from "react";
import ButtonBar from "./ButtonBar"


class RussianVariants extends Component {
    render() {
        return (
            <div align="center" className="font-oswald">
                <div>
                    Полный список вариантов:
                </div>
                <ButtonBar subject="rus" type="" isLimited="0"/>

            </div>
        )
    }
}

export default RussianVariants

