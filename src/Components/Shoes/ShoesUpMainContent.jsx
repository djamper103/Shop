import React from 'react'
import style from './shoesUpMainContent.module.css'
import nike from "../../Common/Image/nike.jpg";

const ShoesUpMainContent = () => {
   
    return (

        <div className={style.Content}>

            <div className={style.upImg}>
                <img src={nike} />
            </div>
            <div className={style.mainShoes}>
            <div className={style.shoes}>Your Shoes</div>
            <div className={style.nike270}>Nike Air Edge 270</div>
            <div className={style.theNike}>The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.</div>
            </div>
        </div>
    )
}
export default ShoesUpMainContent;