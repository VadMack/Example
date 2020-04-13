import React, {Component} from "react";
import "./Styles/styles.css"
import {Carousel} from "react-bootstrap";
import image from './blur6.png'


function MainCarousel() {

    return (
        <div className="carousel-style">
        <Carousel >
            <Carousel.Item >
                <img src={image} alt={1}/>
                <Carousel.Caption>
                    <h3>Русский язык</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image} alt={1}/>
                <Carousel.Caption>
                    <h3>Информатика</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image} alt={1}/>
                <Carousel.Caption>
                    <h3>Обществознание</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default MainCarousel;