import React from 'react'
import style from './MainUpContent.module.css'
import CarouselBox from "../../../Common/Carousel/Carousel";


const MainUpContent = () => {
    return (
        <div className={style.Content}>
            <CarouselBox />
        </div>
    )
}
export default MainUpContent;