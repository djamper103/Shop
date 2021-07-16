import React, { useEffect, useState } from 'react'
import cartImg from '../../Common/Image/cart.svg'
import style from './Cart.module.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { toast } from "react-toastify";
import { NavLink,useHistory } from "react-router-dom";
import {Container} from "react-bootstrap"



export default function Cart({ cart, removeFromCart, increaseCart, decreaseCart, priceCount }) {
    const history = useHistory();
    const [state,setState]=useState([...cart])
    useEffect(() => {
        setState([...cart])
    }, [cart])

    async function handleSubmit(token) {
        const newCart = state.map(item => {
            for (const i in item) {
                if (i === "id") {
                    return item[i]
                }
            }
        }).reduce((all, item) => `${item}; ` + all).toString()


        

        axios.post(`"http://localhost:4000/payment`, { token, cart: newCart, priceCount: ((priceCount / 28).toFixed(2) * 100) })
        .then(response => {
        console.log("Response:", response.data);
        if (response.status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    })
}
    

    function gotoHome() {
        history.push("/Shop");
    }


    return (
        <div className={style.main}>
         <div  className={style.header}>
            <h3>Корзина</h3>
        </div>
        <div className={style.Content}>
            {
                state.length > 0 ?
                <div className={style.mainContent}>
                    <div className={style.product}>
                        {state.map(product =>
                            <div key={product.id}>
                                <div className={style.component} key={product.id} >
                                <NavLink to={state.length!=0?`/Product/${product.id}`:'/Shop'}>
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
                                    <div className={style.increase}>
                                    <button onClick={() => decreaseCart(product)} >-</button>
                                    <span>{product.count}</span>
                                    <button onClick={() => increaseCart(product)}>+</button>
                                    <div className={style.removeFromCart}>
                                    <button onClick={() => removeFromCart(product)}>X</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        )
                        }
                        
                    </div>
                    <div className={style.stripe}>
                        <StripeCheckout
                            stripeKey="pk_test_51J12GCE9ORF0ZMb0UFA5Q0mkv6CRJvWLTA4jmDp2stqCIsvZWb0oUgdi3Y9tf7IV31RRkFWirBy24V9rcoEXZmp0008sZHH7AK"
                            token={handleSubmit}
                            billingAddress
                            shippingAddress
                        />
                        </div>
</div>
                    :
                    <Container
                        className="d-flex align-items-center justify-content-center  "
                        style={{ minHeight: "80vh" }}>
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                        <div className={style.noProduct}>
                                <img src={cartImg} /> 
                            <p >В корзине нет товаров</p>
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