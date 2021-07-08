import React from 'react'
import style from './shoesUpContent.module.css'
import ShoesUpMainContent from './ShoesUpMainContent';

const ShoesUpContent = () => {
   
    return (

        <div className={style.Content}>

            <div className={style.mainContent}>
                <ShoesUpMainContent/>
            </div>
            {/* <div className={style.color}>
                <h3>Color</h3>
                <div className={style.selectColor}>
                    <div className={style.gray}></div>
                    <div className={style.black} ></div>
                    <div className={style.blue}></div>
                    <div className={style.yellow}></div>
                </div>
            </div> */}
        </div>
    )
}
export default ShoesUpContent;