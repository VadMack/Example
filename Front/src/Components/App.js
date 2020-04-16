import React from "react";
import Hat from "./Hat";
import "./Styles/styles.css"
import MainPage from "./MainPage";
import Varik from "./Variant"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./MainPage";
import RussianMenu from "./RussianPage";
import RussianVariants from "./RussianVariants";


function App() {
    return (
        <Router>
            <Hat/>
            <Switch>
                <Route exact path={"/"}>
                    <MainPage/>
                </Route>
                <Route exact path={"/RussianMenu"}>
                    <RussianMenu/>
                </Route>
                <Route path={"/Variants"}>
                    <RussianVariants/>
                </Route>
                <Route path="/RussianMenu/:id" component = {Varik}>
                </Route>
            </Switch>
        </Router>

    )
}

export default App