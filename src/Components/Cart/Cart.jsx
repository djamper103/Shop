import React from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'


export default function Cart ({cart,removeFromCart,increaseCart, decreaseCart}) {

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
                                <button onClick={()=>decreaseCart(product)} >-</button>
                                <span>{product.count}</span>
                                <button onClick={()=>increaseCart(product)}>+</button>
                                <button onClick={()=>removeFromCart(product)}>X</button>
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