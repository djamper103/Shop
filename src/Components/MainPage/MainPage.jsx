import React, { useEffect, useState } from 'react'
import style from './MainPage.module.css'
import Sale from "./Content/SaleMain/Sale";
import NewReleases from "./Content/NewReleases/NewReleases";
import TopSelectionPanel from "./Content/TopSelectionPanel";
import MainUpContent from "./Content/MainUpContent";



const MainPage = ({ state, addToCart, addFavorites, removeFromFavorites,}) => {
    
    return (
        <div className={style.Maincontent}>

            <MainUpContent />
            {/* <TopSelectionPanel /> */}
            <Sale addToCart={addToCart} addFavorites={addFavorites}
             removeFromFavorites={removeFromFavorites} />
            <NewReleases state={state} addToCart={addToCart} addFavorites={addFavorites}
              removeFromFavorites={removeFromFavorites}/>
        </div>
    )
}
export default MainPage;