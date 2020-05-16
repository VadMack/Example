import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Hat from "./Components/Elements/Hat";
import "./Components/Styles/styles.css"
import MainPage from "./Components/Pages/MainPage";
import Variant from "./Components/Pages/Variant"
import SubjectBar from "./Components/Pages/SubjectBar";
import AllVariants from "./Components/Pages/AllVariants";
import Marathon from "./Components/Pages/Marathon";
import FillingDatabase from "./Components/Extra/FillingDatabase";


function App() {
    return (
        <Router>
            <Hat/>
            <Switch>
                <Route exact path={"/"}>
                    <MainPage/>
                </Route>
                <Route path={"/Menu/:sbj"} component={SubjectBar}/>
                <Route path={"/allVariants"}>
                    <AllVariants/>
                </Route>
                <Route path="/variants/:sbj/:id" component = {Variant}/>
                <Route path="/marathon/:sbj/:prototype" component = {Marathon}/>
                <Route path="/fill-db/:sbj" component = {FillingDatabase}/>
            </Switch>
        </Router>

    )
}

export default App