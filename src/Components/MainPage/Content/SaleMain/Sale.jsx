import React, { useState, useEffect } from "react";
import style from "./Sale.module.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import {BsHeart,BsHeartFill} from "react-icons/all";

export default function Sale({ addToCart, addFavorites, removeFromFavorites,setPushingTheProduct }) {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!loading){
            axios.get(`/api/sale`).then(response => {

                setState([...state, ...response.data.data])
            })
            setLoading(true)
        }
       
    }, [loading])

    return (
        <div className={style.main}>
            <div className={style.header}>
                <h3>Sale</h3>
            </div>
            <div className={style.Content}>
                {
                    state.map((product) => (
                        <div className={style.component} key={product.id}>
                            <NavLink to={state.length != 0 ? `/Product/${product.id}` : '/Shop'} onClick={()=>setPushingTheProduct(true)}>
                                <div className={style.image}>
                                    <img src={product.image} alt={product.id} title={product.id} />
                                </div>
                                <div className={style.productId}>{product.id}</div>
                            </NavLink>
                            <div className={style.favorites}><div className={style.favorite}><span>{product.favorites ? <BsHeartFill onClick={() => {
                                removeFromFavorites(product)
                                { product.favorites = false }
                            }} /> : <BsHeart onClick={() => {
                                addFavorites(product)
                                { product.favorites = true }
                            }} />}</span></div></div>
                            <div className={style.size}>
                                {
                                    product.size.split(" ").map(item => <button key={item} onClick={() =>product.chosenSize = item}>{item}</button>)
                                }
                            </div>
                            <div className={style.price}>
                                {product.salePrice} грн.
                                <span>{product.price} грн.</span></div>
                            <div className={style.addToCart}>
                                <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}