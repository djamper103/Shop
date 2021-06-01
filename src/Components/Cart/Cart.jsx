import React from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'


export default function Cart ({priceCount,cart,removeFromCart,addToCart}) {
debugger
    return(
        <div className={style.cart}>
            <h3>Корзина</h3>
            <img src={cartImg}/>
            <div className={style.sale}>
                {cart.map(product=>
                        <div key={product.id}>
                            <div className={style.component} key={product.id} >
                                <img src={product.thumbnailUrl} alt=''/>
                                <div className={style.product}>{product.id}</div>
                                <div className={style.size}>{product.title}</div>
                                <div className={style.price}>{product.id}</div>
                                <button onClick={()=>removeFromCart(product)} >Remove</button>
                                <button onClick={()=>addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                )
                }
            </div>
            <p>В корзине нет товаров</p>
            <button>Перейти в каталог</button>
        </div>
    )

}