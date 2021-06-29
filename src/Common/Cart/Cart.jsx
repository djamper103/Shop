import React, { useEffect, useState } from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { toast } from "react-toastify";


export default function Cart({ cart, removeFromCart, increaseCart, decreaseCart, priceCount }) {

    const [state,setState]=useState([...cart])
    useEffect(() => {
        setState([...cart])
    }, [state])

    async function handleSubmit(token) {
        const newCart = state.map(item => {
            for (const i in item) {

                if (i === "id") {
                    return item[i]
                }
            }
        }).reduce((all, item) => `${item}; ` + all).toString()
        debugger
        const response = await axios.post(
            "http://localhost:4000/payment",
            { token, cart: newCart, priceCount: ((priceCount / 28).toFixed(2) * 100) }
        );
        debugger
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className={style.container}>
            <h3>Корзина</h3>
            {
                state.length > 0 ?
                    <div className={style.product}>
                        {state.map(product =>
                            <div key={product.id}>
                                <div className={style.component} key={product.id} >
                                    <img src={product.image} alt='' />
                                    <div className={style.product}>{product.id}</div>
                                    <div className={style.size}>Chosen Size:{product.chosenSize}</div>
                                    <div className={style.size}>
                            {
                                product.size.split(" ").map(item => <button key={item} onClick={() => 
                                    product.chosenSize=item
                                    
                                   
                                }>{item}</button>)
                            }
                        </div>
                                    <div className={style.price}>{product.price}</div>
                                    <button onClick={() => decreaseCart(product)} >-</button>
                                    <span>{product.count}</span>
                                    <button onClick={() => increaseCart(product)}>+</button>
                                    <button onClick={() => removeFromCart(product)}>X</button>
                                </div>
                            </div>
                        )
                        }
                        <StripeCheckout
                            stripeKey="pk_test_51J12GCE9ORF0ZMb0UFA5Q0mkv6CRJvWLTA4jmDp2stqCIsvZWb0oUgdi3Y9tf7IV31RRkFWirBy24V9rcoEXZmp0008sZHH7AK"
                            token={handleSubmit}
                            billingAddress
                            shippingAddress
                        />
                    </div>

                    :
                    
                     <div className={style.product}>
                        <img src={cartImg} />
                        <p>В корзине нет товаров</p>
                    </div>
            }

        </div>
    )

}