import React from "react";
import "../Styles/styles.css"
import {Carousel} from "react-bootstrap";
import image from '../Images/blur6.png'


function MainCarousel() {

    return (
        <div className="carousel-style">
        <Carousel style={{height:'93vh', width:'100vw'}}>
            <Carousel.Item style={{height:'93vh'}}>
                <img src={image} alt={1} style={{height:'93vh', width:'100vw'}}/>
                <Carousel.Caption>
                    <h3>Решайте готовые варианты</h3>
                    <p>Отложите все дела в сторону и проверьте свои знания</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'93vh'}}>
                <img src={image} alt={1} style={{height:'93vh', width:'100vw'}}/>
                <Carousel.Caption>
                    <h3>Попробуйте уникальный в своем роде режим подговки "Марафон"</h3>
                    <p>А сколько подряд решил ты?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'93vh'}}>
                <img src={image} alt={1} style={{height:'93vh', width:'100vw'}}/>
                <Carousel.Caption>
                    <h3>Получите все необходимые знания для успешной сдачи экзамена в разделе "теоретические материалы"</h3>
                    <p>Информация изложена доступно и на конкретных примерах</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default MainCarousel;