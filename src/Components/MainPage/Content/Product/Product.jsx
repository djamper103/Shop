import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Product.module.css"
import {BsHeart,BsHeartFill} from "react-icons/all";
import { NavLink } from "react-router-dom";

export default function Product({ state, addToCart,removeFromFavorites,addFavorites}) {
 

    const [products, setProoducts] = useState([])
    const { id } = useParams()

    
    useEffect(() => {

        const product = state.filter(item => {
            if (item.id === id) {
                return item.id
            }

        })
        setProoducts(product)

        
    }, [state])


    return (
        <div>
            {
                products.map((product) => (
                <div className={style.component} key={product.id}>
                    <div className={style.image}>
                      <img src={product.image} alt={product.id} title={product.id} />
                    </div>
                    <div className={style.productId}>{product.id}</div>
                  <div className={style.favorites}><div className={style.favorite}><span>{product.favorites ? <BsHeartFill onClick={() => {
                    removeFromFavorites(product)
                    { product.favorites = false }
                  }} /> : <BsHeart onClick={() => {
                    addFavorites(product)
                    { product.favorites = true }
                  }} />}</span></div></div>
                  <div className={style.size}>
                    {product.size.split(" ").map(item => <button key={item} onClick={() =>product.chosenSize = item
                      }>{item}</button>)}
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
    )
}