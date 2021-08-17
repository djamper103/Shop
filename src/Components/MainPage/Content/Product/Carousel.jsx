import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carousel.module.css"


export default function CarouselBoxProduct({image1,image2,image3}) {

    return (
        <div className={style.transition}>
            <Carousel>
                <Carousel.Item>
                <img src={image1} alt={""} />
                </Carousel.Item>

                <Carousel.Item>
                <img src={image2} alt={""} />
                </Carousel.Item>

                <Carousel.Item>
                <img src={image3} alt={""} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}