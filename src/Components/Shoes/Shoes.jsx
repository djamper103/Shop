import React, { useEffect, useState } from 'react'
import style from './Shoes.module.css'
import ShoesUpContent from "./shoesUpContent"
import axios from 'axios'
import { NavLink } from "react-router-dom";
import {
  BsHeart,
  BsHeartFill
} from "react-icons/all";


const Shoes = ({ addToCart, addFavorites, removeFromFavorites }) => {



  const [state, setState] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  const [typeGender, setGender] = useState("all")
  const [typeItem, setTypeItem] = useState("all")
  const [priceItem, setPriceItem] = useState(["all"])
  const [productItem, setProductItem] = useState([])
  const [searchItem, setSearchItem] = useState("")


  useEffect(() => {
    if (fetching) {
      let limit = 8
      axios.post(`/api/shoes`, { currentPage, limit })
        .then(response => {
          debugger
          setState([...state, ...response.data.data])
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
    const newProducts = [...state]
      .sort((a, b) => {
        if (priceItem === "mostPrise") {
          debugger
          return b.price - a.price
        } else if
          (priceItem === "lowPrise") {
          return a.price - b.price
        } else {
          return 0
        }
      })
      .filter((product) =>
        typeGender === "all" ? product : product.gender === typeGender
      )
      .filter((product) =>
        typeItem === "all" ? product : product.type === typeItem
      )
      .filter((product) =>
        product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
      );
    setProductItem(newProducts);
  }, [typeItem, priceItem, state, searchItem]);


  return (

    <div className={style.Content}>

      <div>
        {/* <ShoesUpContent/> */}
      </div>
      <div className={style.select} >
        <select name="select" onChange={event => { setGender(event.target.value) }}>
          <option value="all" >All</option>
          <option value="male" >Male</option>
          <option value="female">Female</option>
        </select>

        <select name="select" onChange={event => { setPriceItem(event.target.value) }}>
          <option defaultValue="all" >All</option>
          <option value="mostPrise" >Most Prise</option>
          <option value="lowPrise">Low Prise</option>
        </select>
        <input placeholder="Search..." onChange={event => { setSearchItem(event.target.value.replace(/\s+/g, '')) }} />

      </div>
      <div className={style.maincontent}>
        <div className={style.product}>
          {
            productItem.map((product) => (
              <div className={style.component} key={product.id}>
                <NavLink
                  to={state.length != 0 ? `/Product/${product.id}` : "/Shop"}
                >
                  <div className={style.image}>
                    <img src={product.image} alt={product.id} title={product.id} />
                  </div>
                  <div className={style.productId}>{product.id}</div>
                </NavLink>

                <div className={style.favorites}><span>{product.favorites ? <BsHeartFill onClick={() => {
                  removeFromFavorites(product)
                  { product.favorites = false }

                }} /> : <BsHeart onClick={() => {
                  addFavorites(product)
                  { product.favorites = true }


                }} />}</span></div>
                <div className={style.size}>
                  {
                    product.size.split(" ").map(item => <button key={item} onClick={() =>
                      product.chosenSize = item


                    }>{item}</button>)
                  }
                </div>

                <div className={style.price}>
                  <p>{product.price}</p>грн.</div>
                <div className={style.addToCart}>
                  <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>


                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}
export default Shoes;