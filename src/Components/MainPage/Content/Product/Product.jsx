import React, { useEffect, useState,useMemo } from "react"
import { useParams } from "react-router-dom"
import style from "./Product.module.css"
import {BsHeart,BsHeartFill} from "react-icons/all";


export default function Product({ state, addToCart,removeFromFavorites,addFavorites,}) {

    const [products, setProoducts] = useState([])
    const { id } = useParams()
    const [newState, setnewState] = useState([])
    
    useEffect(() => {
        const product = state.filter(item => {
            if (item.id === id) {
                return item.id
            }
        })
        setProoducts(product)   
    }, [id])

    const handleSizeChange = (size) =>{
      let a=products.map(item=>{
        item.chosenSize=size
        return item
      })
      setnewState([...a])
    }

    return (
        <div>
            {
                (newState.length>0?newState:products).map((product) => (
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
                    <div className={style.chosenSize}>Chosen Size: {product.chosenSize?product.chosenSize
                                    :"Size not selected"}
                                    </div>
                  <div className={style.size}>
                    {product.size.split(" ").map(item => <button key={item} onClick={() => handleSizeChange(item)}>{item}</button>)}
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