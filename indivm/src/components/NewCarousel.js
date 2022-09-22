import { Carousel } from 'react-bootstrap';
import React from 'react'

export default function NewCarousel() {
    return (
        <Carousel className='carousel mt-lg-0 mt-5'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={require('../img/solar-power-panel-sky-background-3d-rendering.png')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>IF THE SUN CAN PAY YOUR BILL,
                        WHY SHOULD YOU?</h1>
                    <p>A solar system requires no continuous supply of fossil fuels, and a lot less maintenance
                        and skilled human resource than a thermal power plant and this results in massive reduction in cost</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={require('../img/solar-power-panel-sky-background-3d-rendering.png')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>
                        THE SMARTEST ENERGY CHOICE UNDER THE SUN</h3>
                    <p>Evaluate your Solar System size to be installed!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={require('../img/solar-power-panel-sky-background-3d-rendering.png')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
