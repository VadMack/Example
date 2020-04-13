import React from "react";
import Hat from "./Hat";
import "./Styles/styles.css"
import MainPage from "./MainPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./MainPage";
import RussianMenu from "./RussianPage";



function App() {
    return (

        <div align={"center"}>
            <Hat />
            <Router>
                <Route exact path = {"/"}>
                    <MainPage/>
                </Route>
                <Route path={"/RussianMenu"}>
                    <RussianMenu/>
                </Route>
            </Router>
        </div>
    )
}

export default App