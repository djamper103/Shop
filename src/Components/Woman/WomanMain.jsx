/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import style from "./WomanMain.module.css";
import axios from "axios";
import Mapping from "../Mapping/Mapping";
import ItemFilter from "../Mapping/itemFilter";
import "../../server";

const WomanMain = ({ addToCart, addFavorites, removeFromFavorites }) => {
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const [typeItem, setTypeItem] = useState("all");
  const [priceItem, setPriceItem] = useState(["all"]);
  const [productItem, setProductItem] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    if (fetching) {
      let limit = 8;
      axios
        .post(`/api/woman`, { currentPage, limit })
        .then((response) => {
          setState([...state, ...response.data.data]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    if (currentPage > 1) {
      document.addEventListener("scroll", scrollHandler);

      return function () {
        document.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [currentPage]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      1
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    setProductItem(ItemFilter(typeItem, priceItem, state, searchItem));
  }, [typeItem, priceItem, state, searchItem]);

  return (
    <div className={style.Content}>
      <div className={style.upImage}>
        <img src="https://static.staff-clothes.com/uploads/media/default/0001/86/dd9b3f8e12324facb6c2b379a0e1abb9.jpeg" />
      </div>
      <div className={style.select}>
        <select
          name="select"
          onChange={(event) => {
            setTypeItem(event.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="polo">Polo</option>
          <option value="hoody">Hoody</option>
          <option value="jacket">Jacket</option>
          <option value="pants">Pants</option>
          <option value="shorts">Shorts</option>
        </select>

        <select
          name="select"
          onChange={(event) => {
            setPriceItem(event.target.value);
          }}
        >
          <option defaultValue="all">All</option>
          <option value="mostPrise">Most Prise</option>
          <option value="lowPrise">Low Prise</option>
        </select>

        <div>
          <input
            placeholder="Search..."
            onChange={(event) => {
              setSearchItem(event.target.value.replace(/\s+/g, ""));
            }}
          />
        </div>
      </div>

      <div className={style.maincontent}>
        <Mapping
          addToCart={addToCart}
          addFavorites={addFavorites}
          removeFromFavorites={removeFromFavorites}
          productItem={productItem}
          sale={false}
        />
      </div>
    </div>
  );
};

export default WomanMain;
