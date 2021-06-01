import React from 'react'
import style from './NewRealeases.module.css'
import NewRealeasesUpContent from "./NewRealeasesUpContent";
import SelectColor from "./SelectColor";




const NewRealeases=()=>{
    return(

        <div className={style.Content}>
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/89/610dad00ed074fab8bdce984fd3821c6.jpeg"/>
            {/*<NewRealeasesUpContent/>*/}
            {/*<SelectColor/>*/}
        </div>
    )
}
export default NewRealeases;