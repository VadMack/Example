import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Dropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import "../Styles/styles.css"


class Hat extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{height:'7vh'}}>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Dropdown className="font-oswald">
                                <Dropdown.Toggle className="button-style" variant="dark" id="dropdown-basic">
                                    Выбрать предмет
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="button-style">
                                    <Dropdown.Item href="/Menu">Русский язык</Dropdown.Item>
                                    <Dropdown.Item href="/variants">Информатика</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href={"/"}> SmartExam </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )

    }

}

export default Hat;