/* eslint-disable react/prop-types */
import React from "react";
import style from "./Sale.module.css";
import Mapping from "../../../Mapping/Mapping";

export default function Sale({ addToCart, addFavorites, removeFromFavorites }) {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <h3>Sale</h3>
      </div>

      <div className={style.content}>
        <Mapping
          addToCart={addToCart}
          addFavorites={addFavorites}
          removeFromFavorites={removeFromFavorites}
          sale={true}
        />
      </div>
    </div>
  );
}
