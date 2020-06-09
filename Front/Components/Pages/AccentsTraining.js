import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "../Styles/trainPage.css"
import {renderIntoDocument} from "react-dom/test-utils";

var isStarted = 0;

let dictonary = [
    ["аэропОрты", "аэропортЫ"],
    ["бАнты", "бантЫ"],
    ["бОроду", "бородУ"],
    ["бухгАлтеров", "бухгалтерОв"],
    ["вероисповЕдание", "вероисповедАние"],
    ["граждАнство", "грАжданство"],
    ["дефИс", "дЕфис"],
    ["диспансЕр", "диспАнсер"],
    ["договорЁнность", "договОрённость"],
    ["докумЕнт", "докУмент"],
    ["досУг", "дОсуг"],
    ["еретИк", "ерЕтик"],
    ["жалюзИ", "жАлюзи"],
    ["знАчимость", "значИмость"],
    ["Иксы", "иксЫ"],
    ["диалОг", "диАлог"],
    ["монолОг", "монОлог"],
    ["квартАл", "квАртал"],
    ["киломЕтр", "килОметр"],
    ["сантимЕтр", "сантИметр"],
    ["кОнусы", "конУсы"],
    ["корЫсть", "кОрысть"],
    ["крАны", "кранЫ"],
    ["лЕкторов", "лекторОв"],
    ["мЕстностей", "местностЕй"],
    ["новостЕй", "нОвостей"],
    ["мусоропровОд", "мусоропрОвод"],
    ["газопровОд", "газопрОвод"],
    ["намЕрение", "намерЕние"],
    ["нарОст", "нАрост"],
    ["нЕдуг", "недУг"],
    ["некролОг", "некрОлог"],
    ["нЕнависть", "ненАвисть"],
    ["нОгтя", "ногтЯ"],
    ["Отрочество", "отрОчество"],
    ["партЕр", "пАртер"],
    ["портфЕль", "пОртфель"],
    ["пОручни", "порУчни"],
    ["придАное", "прИданое"],
    ["призЫв", "прИзыв"],
    ["позЫв", "пОзыв"],
    ["свЁкла", "свёклА"],
    ["сиРоты", "сИроты"],
    ["срЕдства", "средствА"],
    ["созЫв", "сОзыв"],
    ["стАтуя", "статУя"],
    ["столЯр", "стОляр"],
    ["малЯр", "мАляр"],
    ["школЯр", "шкОляр"],
    ["тОрты", "тортЫ"],
    ["цемЕнт", "цЕмент"],
    ["цЕнтнер", "центнЕр"],
    ["цепОчка", "цЕпочка"],
    ["шАрфы", "шарфЫ"],
    ["шофЁр", "шОфёр"],
    ["экспЕрт", "Эксперт"],
    ["вернА", "вЕрна"],
    ["красИвее", "красивЕе"],
    ["кУхонный", "кухОнный"],
    ["ловКа", "лОвка"],
    ["мозаИчный", "мозАичный"],
    ["оптОвый", "Оптовый"],
    ["прозорлИва", "прозОрлива"],
    ["слИвовый", "сливОвый"],
    ["баловАть", "бАловать"],
    ["бралАсь", "брАлась"],
    ["взялАсь", "взЯлась"],
    ["включИшь", "вклЮчишь"],
    ["влилАсь", "влИлась"],
    ["гналА", "гнАла"],
    ["закУпорить", "закупОрить"],
    ["звонИт", "звОнит"],
    ["исчЕрпать", "исчерпАть"],
    ["обзвонИт", "обзвОнит"],
    ["ободрИть", "обОдрить"],
    ["озлОбить", "озлобИть"],
    ["опОшлить", "опошлИть"],
    ["освЕдомиться", "осведомИться"],
    ["принУдить", "принудИть"],
    ["убыстрИть", "убЫстрить"],
    ["чЕрпать", "черпАть"],
    ["щЁлкать", "щёлкАть"],
    ["зАгнутый", "загнУтый"],
    ["кормЯщий", "кОрмящий"],
    ["кровоточАщий", "кровОточащий"],
    ["молЯщийся", "мОлящийся"],
    ["нажИвший", "нАживший"],
    ["нанЯвшийся", "нАнявшийся"],
    ["нАчатый", "начАтый"],
    ["понЯвший", "пОнявший"],
    ["сОгнутый", "согнУтый"],
    ["прибЫв", "пРибыв"],
    ["понЯв", "пОняв"],
    ["вОвремя", "воврЕмя"],
    ["добелА", "дОбел"],
    ["дОверху", "довЕрху"],
    ["донЕльзя", "дОнельзя"],
    ["дОнизу", "донИзу"],
    ["завИдно", "зАвидно"],
    ["зАгодя", "загодЯ"],
    ["зАсветло", "засветлО"],
    ["зАтемно", "затемнО"],
    ["надОлго", "нАдолго"]
];

var positionRight;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function chooseAnswers() {
    var position = getRandomInt(dictonary.length);
    positionRight = getRandomInt(2);
    var answers = [dictonary[position][positionRight], dictonary[position][(positionRight + 1) % 2], positionRight];
    return answers;
}

function changeFlag()
{
    console.log('Success');
    isStarted = (isStarted + 1) % 2;
    console.log(isStarted);
    ReactDOM.render(<ShowButton state = {isStarted}/>, document.getElementById('cardBlock'));
}

function PreStart (){
    return <button className= "trainButton" onClick={changeFlag}>Поехали!</button>;
}
function ActivityStudying (props){
    ReactDOM.render(<h1>{props.answer1.toLowerCase()}</h1>, document.getElementById('isCorrect'));
    return <div>
        <button id = "left" onClick={clickStudyingLeft}>{props.answer1}</button>
        <button id = "right" onClick={clickStudyingRight}>{props.answer2}</button>
    </div>;
}

function clickStudyingLeft() {
    clickStudying(0);
}

function clickStudyingRight() {
    clickStudying(1);
}

function clickStudying(button) {
    var element;
    if ((button == 0 && positionRight == 0) || (button == 1 && positionRight == 1))
    {
        ReactDOM.render(<h1>Верно</h1>, document.getElementById('isCorrect'));
        if (positionRight == 0) {
            element = document.getElementById('left');
            element.style.backgroundColor = "green";
        }
        else
        {
            element = document.getElementById('right');
            element.style.backgroundColor = "green";
        }
    }
    else
    {
        ReactDOM.render(<h1>Неверно</h1>, document.getElementById('isCorrect'));
        if (positionRight == 0) {
            element = document.getElementById('right');
            element.style.backgroundColor = "red";
        }
        else
        {
            element = document.getElementById('left');
            element.style.backgroundColor = "red";
        }
    }
    element.style.boxShadow = "0px -3px black inset"
    setTimeout(function a() {element.style.backgroundColor = '#212529'; element.style.boxShadow = "0 -3px #ffff00 inset";}, 400)
    setTimeout(function b() { ReactDOM.render(<ShowButton state = {isStarted}/>, document.getElementById('cardBlock'))}, 800);
}

function ShowButton(props) {
    if (props.state == 0)
        return <PreStart/>
    else {
        var params = chooseAnswers();
        return <ActivityStudying answer1={params[0]} answer2={params[1]}/>
    }
}
class AccentsTraining extends Component {
    render() {
        return (
            <div className = "mainBlock">
                <h1 style = {{textAlign: "center"}}>Тренируй ударения с помощью карточек!</h1>
                <div id = "isCorrect"></div>
                <div id = "cardBlock">
                    <ShowButton state = {isStarted}/>
                </div>
            </div>
        )
    }
}

export default AccentsTraining

