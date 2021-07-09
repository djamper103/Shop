import React,{ useEffect, useState } from "react"
import {BsHeart,BsHeartFill} from "react-icons/all";
import style from "./Mapping.module.css"
import { NavLink } from "react-router-dom";
import axios from "axios"


export default function Mapiing({ addToCart, addFavorites, removeFromFavorites, productItem, sale }) {
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
        <div className={sale?style.componentSale:style.product}>
            {
                (sale?state:productItem).map((product) => (
                    <div className={style.component} key={product.id}>
                        <NavLink to={`/Product/${product.id}`}>
                            <div className={style.image}>
                                <img src={product.image} alt={product.id} title={product.id} />
                            </div>
                            <div className={style.productId}>{product.id}</div>
                        </NavLink>
                        <div className={style.favorites}>
                            <div className={style.favorite}><span>{product.favorites ?
                                <BsHeartFill onClick={() => {
                                    removeFromFavorites(product)
                                    { product.favorites = false }}} />
                                : <BsHeart onClick={() => {
                                    addFavorites(product)
                                    { product.favorites = true }}} />}</span>
                            </div>
                        </div>
                        <div className={style.size}>
                            {product.size.split(" ").map(item => <button key={item} onClick={() =>product.chosenSize = item}>{item}</button>)}
                        </div>
                        <div className={style.price}>
                            {sale ?
                                <div className={style.price}>
                                    {product.salePrice} грн.
                                    <span>{product.price} грн.</span>
                                </div>
                                :<p>{product.price} грн.</p>
                            }
                        </div>
                        <div className={style.addToCart}>
                            <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}