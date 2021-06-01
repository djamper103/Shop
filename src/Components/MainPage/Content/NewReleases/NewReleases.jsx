import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import style from "./NewReleases.module.css";



const  NewReleases=({state,addToCart,removeFromCart})=> {



    return (
        <div className={style.main}>
            <h3>New Releases</h3>
            <div className={style.sale}>
                {
                        state.map(product=>
                            <div key={product.id}>
                                <div className={style.component} key={product.id} >
                                    <NavLink to={`/Product${product.id}`}>
                                    <img src={product.thumbnailrl} alt=''/>
                                    <div className={style.product}>Сумка через плечо Staff navy</div>
                                    <div className={style.size}>Универсальный</div>
                                    <div className={style.price}>280 грн.</div>
                                    </NavLink>
                                    <button onClick={()=>addToCart(product)}>Add to Cart</button>

                                </div>
                            </div>
                        )
                    }
            </div>

        </div>

    )
}
export default NewReleases;