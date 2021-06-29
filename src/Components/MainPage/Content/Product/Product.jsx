  import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Product.module.css"

export default function Product({ state, addToCart }) {
 

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
            {products.map((product) => (
                <div className={style.component} key={product.id}>
                    <img src={product.image} alt={product.id} title={product.id} />
                    <div className={style.product}>{product.id}</div>
                    <div className={style.size}>{product.size}</div>
                    <div className={style.price}>{product.salePrice} грн.<p>{product.price} грн.</p></div>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))
            }
        </div>
    )
}