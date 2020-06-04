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
import RussianTheory1 from "./Components/Pages/RusTheory1";
import RussianTheory2 from "./Components/Pages/RusTheory2";
import RussianTheory3 from "./Components/Pages/RusTheory3";
import RussianTheory4 from "./Components/Pages/RusTheory4";
import RussianTheory5 from "./Components/Pages/RusTheory5";
import RussianTheory6 from "./Components/Pages/RusTheory6";
import RussianTheory7 from "./Components/Pages/RusTheory7";
import RussianTheory8 from "./Components/Pages/RusTheory8";
import RussianTheory9 from "./Components/Pages/RusTheory9";
import RussianTheory10 from "./Components/Pages/RusTheory10";
import RussianTheory11 from "./Components/Pages/RusTheory11";
import RussianTheory12 from "./Components/Pages/RusTheory12";
import RussianTheory13 from "./Components/Pages/RusTheory13";
import RussianTheory14 from "./Components/Pages/RusTheory14";
import RussianTheory15 from "./Components/Pages/RusTheory15";
import RussianTheory16 from "./Components/Pages/RusTheory16";
import RussianTheory17 from "./Components/Pages/RusTheory17";
import RussianTheory18 from "./Components/Pages/RusTheory18";
import RussianTheory19 from "./Components/Pages/RusTheory19";
import RussianTheory20 from "./Components/Pages/RusTheory20";
import RussianTheory21 from "./Components/Pages/RusTheory21";
import RussianTheory22 from "./Components/Pages/RusTheory22";
import RussianTheory23 from "./Components/Pages/RusTheory23";
import RussianTheory24 from "./Components/Pages/RusTheory24";
import RussianTheory25 from "./Components/Pages/RusTheory25";
import RussianTheory26 from "./Components/Pages/RusTheory26";
import InformaticTheory1 from "./Components/Pages/InfTheory1";
import InformaticTheory2 from "./Components/Pages/InfTheory2";
import InformaticTheory3 from "./Components/Pages/InfTheory3";
import InformaticTheory4 from "./Components/Pages/InfTheory4";
import InformaticTheory5 from "./Components/Pages/InfTheory5";
import InformaticTheory6 from "./Components/Pages/InfTheory6";
import InformaticTheory7 from "./Components/Pages/InfTheory7";
import InformaticTheory8 from "./Components/Pages/InfTheory8";
import InformaticTheory9 from "./Components/Pages/InfTheory9";
import InformaticTheory10 from "./Components/Pages/InfTheory10";
import InformaticTheory11 from "./Components/Pages/InfTheory11";
import InformaticTheory12 from "./Components/Pages/InfTheory12";
import InformaticTheory13 from "./Components/Pages/InfTheory13";
import InformaticTheory14 from "./Components/Pages/InfTheory14";
import InformaticTheory15 from "./Components/Pages/InfTheory15";
import InformaticTheory16 from "./Components/Pages/InfTheory16";
import InformaticTheory17 from "./Components/Pages/InfTheory17";
import InformaticTheory18 from "./Components/Pages/InfTheory18";
import InformaticTheory19 from "./Components/Pages/InfTheory19";
import InformaticTheory20 from "./Components/Pages/InfTheory20";
import InformaticTheory21 from "./Components/Pages/InfTheory21";
import InformaticTheory22 from "./Components/Pages/InfTheory22";
import InformaticTheory23 from "./Components/Pages/InfTheory23";
import AccentsTraining from "./Components/Pages/AccentsTraining";


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

                <Route path = {"/rustheory1"}>
                    <RussianTheory1/>
                </Route>
                <Route path = {"/rustheory2"}>
                    <RussianTheory2/>
                </Route>
                <Route path = {"/rustheory3"}>
                    <RussianTheory3/>
                </Route>
                <Route path = {"/rustheory4"}>
                    <RussianTheory4/>
                </Route>
                <Route path = {"/rustheory5"}>
                    <RussianTheory5/>
                </Route>
                <Route path = {"/rustheory6"}>
                    <RussianTheory6/>
                </Route>
                <Route path = {"/rustheory7"}>
                    <RussianTheory7/>
                </Route>
                <Route path = {"/rustheory8"}>
                    <RussianTheory8/>
                </Route>
                <Route path = {"/rustheory9"}>
                    <RussianTheory9/>
                </Route>
                <Route path = {"/rustheory10"}>
                    <RussianTheory10/>
                </Route>
                <Route path = {"/rustheory11"}>
                    <RussianTheory11/>
                </Route>
                <Route path = {"/rustheory12"}>
                    <RussianTheory12/>
                </Route>
                <Route path = {"/rustheory13"}>
                    <RussianTheory13/>
                </Route>
                <Route path = {"/rustheory14"}>
                    <RussianTheory14/>
                </Route>
                <Route path = {"/rustheory15"}>
                    <RussianTheory15/>
                </Route>
                <Route path = {"/rustheory16"}>
                    <RussianTheory16/>
                </Route>
                <Route path = {"/rustheory17"}>
                    <RussianTheory17/>
                </Route>
                <Route path = {"/rustheory18"}>
                    <RussianTheory18/>
                </Route>
                <Route path = {"/rustheory19"}>
                    <RussianTheory19/>
                </Route>
                <Route path = {"/rustheory20"}>
                    <RussianTheory20/>
                </Route>
                <Route path = {"/rustheory21"}>
                    <RussianTheory21/>
                </Route>
                <Route path = {"/rustheory22"}>
                    <RussianTheory22/>
                </Route>
                <Route path = {"/rustheory23"}>
                    <RussianTheory23/>
                </Route>
                <Route path = {"/rustheory24"}>
                    <RussianTheory24/>
                </Route>
                <Route path = {"/rustheory25"}>
                    <RussianTheory25/>
                </Route>
                <Route path = {"/rustheory26"}>
                    <RussianTheory26/>
                </Route>

                <Route path = {"/inftheory1"}>
                    <InformaticTheory1/>
                </Route>
                <Route path = {"/inftheory2"}>
                    <InformaticTheory2/>
                </Route>
                <Route path = {"/inftheory3"}>
                    <InformaticTheory3/>
                </Route>
                <Route path = {"/inftheory4"}>
                    <InformaticTheory4/>
                </Route>
                <Route path = {"/inftheory5"}>
                    <InformaticTheory5/>
                </Route>
                <Route path = {"/inftheory6"}>
                    <InformaticTheory6/>
                </Route>
                <Route path = {"/inftheory7"}>
                    <InformaticTheory7/>
                </Route>
                <Route path = {"/inftheory8"}>
                    <InformaticTheory8/>
                </Route>
                <Route path = {"/inftheory9"}>
                    <InformaticTheory9/>
                </Route>
                <Route path = {"/inftheory10"}>
                    <InformaticTheory10/>
                </Route>
                <Route path = {"/inftheory11"}>
                    <InformaticTheory11/>
                </Route>
                <Route path = {"/inftheory12"}>
                    <InformaticTheory12/>
                </Route>
                <Route path = {"/inftheory13"}>
                    <InformaticTheory13/>
                </Route>
                <Route path = {"/inftheory14"}>
                    <InformaticTheory14/>
                </Route>
                <Route path = {"/inftheory15"}>
                    <InformaticTheory15/>
                </Route>
                <Route path = {"/inftheory16"}>
                    <InformaticTheory16/>
                </Route>
                <Route path = {"/inftheory17"}>
                    <InformaticTheory17/>
                </Route>
                <Route path = {"/inftheory18"}>
                    <InformaticTheory18/>
                </Route>
                <Route path = {"/inftheory19"}>
                    <InformaticTheory19/>
                </Route>
                <Route path = {"/inftheory20"}>
                    <InformaticTheory20/>
                </Route>
                <Route path = {"/inftheory21"}>
                    <InformaticTheory21/>
                </Route>
                <Route path = {"/inftheory22"}>
                    <InformaticTheory22/>
                </Route>
                <Route path = {"/inftheory23"}>
                    <InformaticTheory23/>
                </Route>
                <Route path = {"/accentstraining"}>
                    <AccentsTraining/>
                </Route>

            </Switch>
        </Router>

    )
}

export default App