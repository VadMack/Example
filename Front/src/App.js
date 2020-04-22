import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Hat from "./Components/Elements/Hat";
import "./Components/Styles/styles.css"
import MainPage from "./Components/Pages/MainPage";
import Variant from "./Components/Pages/Variant"
import RussianPage from "./Components/Pages/RussianPage";
import RussianVariants from "./Components/Pages/RussianVariants";


function App() {
    return (
        <Router>
            <Hat/>
            <Switch>
                <Route exact path={"/"}>
                    <MainPage/>
                </Route>
                <Route path={"/Menu"}>
                    <RussianPage/>
                </Route>
                <Route path={"/allVariants"}>
                    <RussianVariants/>
                </Route>
                <Route path="/variants/:sbj/:id" component = {Variant}>
                </Route>
            </Switch>
        </Router>

    )
}

export default App