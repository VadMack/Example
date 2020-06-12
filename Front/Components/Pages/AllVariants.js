import React, {Component} from "react";
import ButtonBar from "../Elements/ButtonBar"


class AllVariants extends Component {

    render() {
        let screenWidth = window.innerWidth;
        let mainBarWidth;
        let addBarWidth;
        if (screenWidth > 500) {
            mainBarWidth = '50vw';
            addBarWidth = '25vw';
        }
        else {
            mainBarWidth = '96vw';
            addBarWidth = '2vw';
        }
        return (
            <div align="center" className="font-oswald">
                <div className="add-block" style={{width: addBarWidth}}>
                </div>
                <div className="main-block" style={{width: mainBarWidth}}>
                    <div>
                        Полный список вариантов:
                    </div>
                    <ButtonBar subject={this.props.match.params.sbj} type="variant" isLimited="0"/>
                </div>
                <div className="add-block" style={{width: addBarWidth}}>
                </div>

            </div>
        )
    }
}

export default AllVariants

