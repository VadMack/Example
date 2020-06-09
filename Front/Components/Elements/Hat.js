import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import {Dropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import logoImage from '../Images/logoname.png'
import "../Styles/styles.css";



class Hat extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{height:'7vh', maxHeight:'60px', minHeight:'40px'}}>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Dropdown className="font-oswald">
                                <Dropdown.Toggle className="button-style" variant="dark" id="dropdown-basic">
                                    Выбрать предмет
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="button-style">
                                    <Dropdown.Item href="/Menu/rus">Русский язык</Dropdown.Item>
                                    <Dropdown.Item href="/Menu/inf">Информатика</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src = {logoImage}
                                    style={{height:'5vh', wight:'15vw', marginTop:'1vh'}}
                                />
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )

    }

}

export default Hat;