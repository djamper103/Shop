import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./NewReleases.module.css";
import {
    BsHeart,
    BsHeartFill
} from "react-icons/all";

const NewReleases = ({ state, addToCart, addFavorites, removeFromFavorites }) => {
    const [typeItem, setTypeItem] = useState("all")
    const [typeGender, setGender] = useState("all")
    const [priceItem, setPriceItem] = useState(["all"])
    const [productItem, setProductItem] = useState([])
    const [searchItem, setSearchItem] = useState("")


    useEffect(() => {
        const newProducts = [...state]
            .sort((a, b) => {
                if (priceItem === "mostPrise") {
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
    }, [typeItem, priceItem, productItem, searchItem]);


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
                    <div className={style.product}>
                        {
                            productItem.map((product) => (
                                <div className={style.component} key={product.id}>
                                    <NavLink to={state.length != 0 ? `/Product/${product.id}` : '/Shop'}>
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
        </div>

    )
}
export default NewReleases;