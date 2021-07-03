import React, { useEffect, useState } from 'react'
import style from './MainPage.module.css'
import Sale from "./Content/SaleMain/Sale";
import NewReleases from "./Content/NewReleases/NewReleases";
import TopSelectionPanel from "./Content/TopSelectionPanel";
import MainUpContent from "./Content/MainUpContent";



const MainPage = ({ state, addToCart, addFavorites }) => {

    return (
        <div className={style.Maincontent}>

            <MainUpContent />
            {/* <TopSelectionPanel /> */}
            <Sale state={state} addToCart={addToCart} addFavorites={addFavorites}/>
            <NewReleases state={state} addToCart={addToCart} addFavorites={addFavorites}/>
        </div>
    )
}
export default MainPage;