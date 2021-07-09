import React, { useEffect, useState } from 'react'
import style from './Shoes.module.css'
import ShoesUpContent from "./shoesUpContent"
import axios from 'axios'
import Mapping from "../Mapping/Mapping"


const Shoes = ({ addToCart, addFavorites, removeFromFavorites,setPushingTheProduct }) => {

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
          setState([...state, ...response.data.data])
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    if(currentPage>1){
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }
}, [currentPage])

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

      <div className={style.ShoesUpContent} >
        <ShoesUpContent />
      </div>
      <div className={style.ShoesContent}>
        <div className={style.select} >
          <div className={style.selectGender}>
          <select name="select" onChange={event => { setGender(event.target.value) }}>
            <option value="all" >All</option>
            <option value="male" >Male</option>
            <option value="female">Female</option>
          </select>
          </div>

          <div className={style.selectPrice}>
          <select name="select" onChange={event => { setPriceItem(event.target.value) }}>
            <option defaultValue="all" >All</option>
            <option value="mostPrise" >Most Prise</option>
            <option value="lowPrise">Low Prise</option>
          </select>
          </div>
          <div className={style.selectSearch}>
          <input placeholder="Search..." onChange={event => { setSearchItem(event.target.value.replace(/\s+/g, '')) }} />
          </div>

        </div>
        <div className={style.maincontent}>
          <Mapping addToCart={addToCart} addFavorites={addFavorites} removeFromFavorites={removeFromFavorites} productItem={productItem} sale={false} />
        </div>
      </div>
    </div>

  )
}
export default Shoes;