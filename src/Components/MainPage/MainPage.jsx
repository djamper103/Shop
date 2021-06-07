import React,{useEffect,useState} from 'react'
import style from './MainPage.module.css'
import Sale from "./Content/SaleMain/Sale";
import NewReleases from "./Content/NewReleases/NewReleases";
import TopSelectionPanel from "./Content/TopSelectionPanel";
import MainUpContent from "./Content/MainUpContent";



const MainPage = ({state,addToCart,removeFromCart}) => {

    return (
        <div className={style.Maincontent}>

            <MainUpContent/>
            <TopSelectionPanel/>
            <Sale state={state} addToCart={addToCart}/>
            <NewReleases state={state} addToCart={addToCart} />
        </div>
    )
}
export default MainPage;