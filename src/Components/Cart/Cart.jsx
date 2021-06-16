import React, {useEffect, useState} from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { toast} from "react-toastify";
import { loadStripe } from "@stripe/stripe-js"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"




export default function Cart ({cart,removeFromCart,increaseCart, decreaseCart,priceCount}) {
    const [product] = React.useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
      });

const stripe = useStripe()
const elements = useElements()



      
const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),

    })

if(!error) {
    try {
        const {id,} = paymentMethod
        debugger
        const response = await axios.post("http://localhost:4000/payment", {
            amount: 2000,
            id
        })

        if(response.data.success) {
            console.log("Successful payment")
        
        }

    } catch (error) {
        console.log("Error", error)
    }
} else {
    console.log(error.message)
}
}

    const [productName,setProductName]=useState([])

    useEffect(()=>{
        setProductName(cart.map(item=>item.id))
    },[cart])

    

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
            <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
            <StripeCheckout
            stripeKey="pk_test_51J12GCE9ORF0ZMb0UFA5Q0mkv6CRJvWLTA4jmDp2stqCIsvZWb0oUgdi3Y9tf7IV31RRkFWirBy24V9rcoEXZmp0008sZHH7AK"
            token={handleSubmit}
            billingAddress
            shippingAddress
            amount={priceCount}
            name={productName}
            /> 
        </div>
    )

}