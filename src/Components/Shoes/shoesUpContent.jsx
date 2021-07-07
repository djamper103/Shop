import React from 'react'
import style from './shoesUpContent.module.css'
import nike from "../../Common/Image/nike.jpg";

const ShoesUpContent = () => {
   
    return (

        <div className={style.Content}>

            <div className={style.upImg}>
                <img src={nike} />
            </div>
            <div className={style.shoes}>Your Shoes</div>
            <div className={style.nike270}>Nike Air Edge 270</div>
            <div className={style.theNike}>The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.</div>
            <div className={style.color}>
                <h3>Color</h3>
                <div className={style.selectColor}>
                    <div className={style.gray}></div>
                    <div className={style.black} ></div>
                    <div className={style.blue}></div>
                    <div className={style.yellow}></div>
                </div>
            </div>
        </div>
    )
}
export default ShoesUpContent;