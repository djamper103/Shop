import React, {useState} from "react";
import style from "./Sale.module.css";
import { NavLink } from "react-router-dom";
export default function Sale({addToCart,}) {

    const [state] = useState([
        {
            id: 'Кросовки Staff white&red',
            size: '40 41 41 43 44 45',
            price: '1150',
            salePrice: '990',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/86/c4fee785e5e94fe4b5b5205974f9b9e2.jpeg",
            count: 1
        },
        {
            id: 'Штаны Staff cargo kil brown',
            size: 'MXL',
            price: '810',
            salePrice: '570',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/86/c4fee785e5e94fe4b5b5205974f9b9e2.jpeg",
            count: 1
        },
        {
            id: 'Поло Staff graphite &amp; white',
            size: 'XS S M L XL XXL',
            price: '450',
            salePrice: '340',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/90/987e1ee97c4f4f1bb2db96765bddb9c7.jpeg",
            count: 1
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1
        },


    ])


    return (
        <div className={style.main}>
            <h3>Sale</h3>
        <div className={style.sale}>
                {state.map((product) =>(
                    <div className={style.component} key={product.id}>
                        <NavLink to={`/Product/${product.id}`}>
                    <img src={product.image} alt={product.id} title={product.id}/>
                        <div className={style.product}>{product.id}</div>
                        </NavLink>
                        <div className={style.size}>{product.size}</div>
                        <div className={style.price}>{product.salePrice} грн.<p>{product.price} грн.</p></div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                    ))
                }
        </div>
        </div>

    )
}