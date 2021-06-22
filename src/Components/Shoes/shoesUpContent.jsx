import React from 'react'
import style from './shoesUpContent.module.css'
import nike from "../../Common/Image/nike.jpg";

const ShoesUpContent = () => {
    debugger
    return (

        <div className={style.Content}>

            <div>
                <img src={nike} />
            </div>
            <div className={style.Mens}>Men's Shoe</div>
            <div className={style.Nike270}>Nike Air Edge 270</div>
            <div className={style.TheNike}>The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.</div>
            <div className={style.Size}>
                <h3>Select Size (us)</h3>
                <div className={style.SelectSize}></div>
            </div>
        </div>
    )
}
export default ShoesUpContent;