import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import html from './images/html.png';
import icon_meme from './images/icon_meme.png';
import './Corousel.css';

function Corousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={html}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={icon_meme}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default Corousel;