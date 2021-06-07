import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import style from "./NewReleases.module.css";



const  NewReleases=({state,addToCart,})=> {



    return (
        <div className={style.main}>
            <h3>New Releases</h3>
            <div className={style.sale}>
            {state.map((product) => (
                    <div className={style.component} key={product.id}>
                        <NavLink to={`/Product/${product.id}`}>
                    <img src={product.image} alt={product.id} title={product.id}/>
                        <div className={style.product}>{product.id}</div>
                        </NavLink>
                        <div className={style.size}>{product.size}</div>
                        <div className={style.price}>{product.salePrice} грн.<p>{product.price} грн.</p></div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                    ))
                }
            </div>

        </div>

    )
}
export default NewReleases;