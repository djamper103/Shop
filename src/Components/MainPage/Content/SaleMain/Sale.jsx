import React, { useState,useEffect } from "react";
import style from "./Sale.module.css";
import { NavLink } from "react-router-dom";

export default function Sale({state, addToCart,}) {

    const [productItem, setProductItem] = useState([])
    useEffect(() => {
        const newProducts = [...state]
            .filter((product) =>
                product.sale==="true"? product : 0
            );
        setProductItem(newProducts);
    }, [state,]);


    return (
        <div className={style.main}>
            <h3>Sale</h3>
            <div className={style.sale}>
                {productItem.map((product) => (
                    <div className={style.component} key={product.id}>
                        <NavLink to={`/Product/${product.id}`}>
                            <img src={product.image} alt={product.id} title={product.id} />
                            <div className={style.product}>{product.id}</div>
                        </NavLink>
                        <div className={style.size}>
                            {
                                product.size.split(" ").map(item => <button key={item} onClick={() => 
                                    product.chosenSize=item
                                    
                                
                                }>{item}</button>)
                            }
                        </div>
                        <div className={style.price}>{product.salePrice} грн.<p>{product.price} грн.</p></div>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))
                }
            </div>
        </div>

    )
}