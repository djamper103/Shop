import React from 'react'
import style from './WomanMain.module.css'
import WomanUpContent from "./WomanUpContent";
import SelectColor from "./SelectColor";



const WomanMain=()=>{
    return(

        <div className={style.Content}>
            <WomanUpContent/>
            {/*<SelectColor/>*/}

        </div>
    )
}
export default WomanMain;