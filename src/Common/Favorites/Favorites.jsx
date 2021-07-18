import React, { useEffect, useState } from 'react'
import favoriets from '../../Common/Image/favoriets.svg'
import style from './Favorites.module.css'
import axios from "axios"
import { NavLink,useHistory } from "react-router-dom";
import {Container} from "react-bootstrap"



export default function Favorites({ favorites,removeFromFavorites,addToCart,setPushingTheProduct}) {

    const [state,setState]=useState([...favorites])
    useEffect(() => {
        setState([...favorites])
    }, [favorites])

    
    const history = useHistory();

    function gotoHome() {
        history.push("/Shop");
    }


    return (
        <div className={style.main}>
         <div  className={style.header}>
            <h3>Избранное</h3>
        </div>
        <div className={style.Content}>
            {
                state.length > 0 ?
                <div className={style.mainContent}>
                    <div className={style.product}>
                        {state.map(product =>
                            <div key={product.id}>
                                <div className={style.component} key={product.id} >
                                <NavLink to={state.length!=0?`/Product/${product.id}`:'/Shop'} onClick={()=>setPushingTheProduct(true)}>
                                <div className={style.image}>
                            <img src={product.image} alt={product.id} title={product.id} />
                            </div>
                            <div className={style.productId}>{product.id}</div>
                            </NavLink>
                                    <div className={style.chosenSize}>Chosen Size: {product.chosenSize?product.chosenSize
                                        :"Size not selected"}
                                    </div>
                                    <div className={style.size}>
                                        {
                                            product.size.split(" ").map(item => <button key={item} onClick={() => 
                                            product.chosenSize=item
                                            }>{item}</button>)
                                        }
                                    </div>
                                    <div className={style.price}><p>{product.price}</p>грн.</div>
                                    <div className={style.favoritesandCart}>
                                    <div className={style.removeFromFavorites}>
                                    <span><button onClick={() => removeFromFavorites(product)}>ОЧИСТИТЬ ИЗБРАННОЕ</button></span>
                                    </div>
                                    <div className={style.addToCart}>
                                    <span><button onClick={() => addToCart(product)}>ДОБАВИТЬ В КОРЗИНУ</button></span>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                           
                            
                        )
                        }
                        
                    </div>

</div>
                    :
                    <Container
                        className="d-flex align-items-center justify-content-center  "
                        style={{ minHeight: "80vh" }}>
                        <div className="w-90" style={{ maxWidth: "400px" }}>
                        <div className={style.noProduct}>
                                <img src={favoriets} /> 
                            <p >В избранном нет товаров</p>
                            <div className={style.noProductButton}>
                            <span><button onClick={gotoHome}>ПЕРЕЙТИ В КАТАЛОГ</button> </span>
                            </div>
                        </div>
                        </div>
                    </Container>
                  
            }
</div>
        </div>
    )

}