import React, { useState,useEffect } from "react";
import style from "./Sale.module.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'


export default function Sale({ addToCart,}) {

    const [state, setState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
   

    useEffect(() => {
        if (fetching) {
            axios.get(`http://localhost:3000/Sale?_limit=4&_page=${currentPage}`)
                .then(response => {
                    setState([...state, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
        
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true)
        }

    }

    return (
        <div className={style.main}>
        <div  className={style.header}>
            <h3>Sale</h3>
        </div>
        <div className={style.Content}>
                {
                    state.map((product) => (
                        <div className={style.component} key={product.id}>
                        <NavLink to={state.length!=0?`/Product/${product.id}`:'/Shop'}>
                            <img src={product.image} alt={product.id} title={product.id} />
                            <div className={style.productId}>{product.id}</div>
                            </NavLink>
                            <div className={style.size}>
                            {
                                product.size.split(" ").map(item => <button key={item} onClick={() => 
                                    product.chosenSize=item
                                    
                                
                                }>{item}</button>)
                            }
                        </div>
                            <div className={style.price}>
                            {product.salePrice} грн.
                            <p>{product.price}</p>грн.</div>
                            <div  className={style.addToCart}>
                            <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>
                            </div>
                        </div>
                    ))
                }
                </div>
                </div>
        

    )
}