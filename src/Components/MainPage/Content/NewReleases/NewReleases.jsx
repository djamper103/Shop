import React, { useState, useEffect } from "react";
import style from "./NewReleases.module.css";
import axios from 'axios'
import Mapping from "../../../Mapping/Mapping"
import ItemFilter from "../../../Mapping/itemFilter"

const NewReleases = (addToCart, addFavorites, removeFromFavorites) => {

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
            axios.post(`/api/shopItem`, { currentPage, limit })
                .then(response => {
                    setState([...state, ...response.data.data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        if (currentPage > 1) {
            document.addEventListener('scroll', scrollHandler)
            return function () {
                document.removeEventListener('scroll', scrollHandler)
            }
        }
    }, [currentPage])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true)
        }

    }


    useEffect(() => {
        setProductItem(ItemFilter(typeItem, priceItem, state, searchItem, typeGender))
    }, [typeItem, priceItem, state, searchItem, typeGender]);



    return (
        <div className={style.main}>
            <div className={style.Content}>
                <div className={style.header}>
                    <h3>New Releases</h3>
                </div>

                <div className={style.select} >
                    <select name="select" onChange={event => { setGender(event.target.value) }}>
                        <option value="all" >All</option>
                        <option value="male" >Male</option>
                        <option value="female">Female</option>
                    </select>

                    <select name="select" onChange={event => { setTypeItem(event.target.value) }}>
                        <option value="all" >All</option>
                        <option value="polo" >Polo</option>
                        <option value="hoody">Hoody</option>
                        <option value="jacket">Jacket</option>
                        <option value="pants">Pants</option>
                        <option value="shorts">Shorts</option>
                        <option value="shoes" >Shoes</option>
                    </select>
                    <select name="select" onChange={event => { setPriceItem(event.target.value) }}>
                        <option value="all" >All</option>
                        <option value="mostPrise" >Most Prise</option>
                        <option value="lowPrise">Low Prise</option>
                    </select>
                    <input placeholder="Search..." onChange={event => { setSearchItem(event.target.value.replace(/\s+/g, '')) }} />

                </div>
                <div className={style.maincontent}>
                    <Mapping addToCart={addToCart} addFavorites={addFavorites} removeFromFavorites={removeFromFavorites} productItem={productItem} sale={false} />
                </div>
            </div>
        </div>

    )
}
export default NewReleases;