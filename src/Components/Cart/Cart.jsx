import React, {useEffect, useState} from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { toast} from "react-toastify";


export default function Cart ({cart,removeFromCart,increaseCart, decreaseCart,priceCount}) {


async function handleSubmit(token) {
debugger
    const response = await axios.post(
        "http://localhost:4000/payment",
        { token, cart ,priceCount:((priceCount/28).toFixed(2)*100)}
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
    } else {
        toast("Something went wrong", { type: "error" });
    }
}



    return(
        <div className={style.container}>
            <h3>Корзина</h3>
            <img src={cartImg}/>
            <div className={style.sale}>
                {cart.map(product=>
                        <div key={product.id}>
                            <div className={style.component} key={product.id} >
                                <img src={product.image} alt=''/>
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

            <StripeCheckout
            stripeKey="pk_test_51J12GCE9ORF0ZMb0UFA5Q0mkv6CRJvWLTA4jmDp2stqCIsvZWb0oUgdi3Y9tf7IV31RRkFWirBy24V9rcoEXZmp0008sZHH7AK"
            token={handleSubmit}
            billingAddress
            shippingAddress
            /> 
        </div>
    )

}