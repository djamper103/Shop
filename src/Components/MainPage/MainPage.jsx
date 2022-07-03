/* eslint-disable react/prop-types */
import React from "react";
import style from "./MainPage.module.css";
import Sale from "./Content/SaleMain/Sale";
import NewReleases from "./Content/NewReleases/NewReleases";
import MainUpContent from "./Content/MainUpContent";

const MainPage = ({ addToCart, addFavorites, removeFromFavorites }) => {
  return (
    <div className={style.maincontent}>
      <MainUpContent />

      <Sale
        addToCart={addToCart}
        addFavorites={addFavorites}
        removeFromFavorites={removeFromFavorites}
      />

      <NewReleases
        addToCart={addToCart}
        addFavorites={addFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default MainPage;
