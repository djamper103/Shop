import React, {useState} from "react";
import style from "./Sale.module.css";
export default function Sale({addToCart,}) {

    const [state] = useState([
        {
            product: 'Кросовки Staff white&red',
            size: '40 41 41 43 44 45',
            price: '1150 грн.',
            salePrice: '990 грн.',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/86/c4fee785e5e94fe4b5b5205974f9b9e2.jpeg"
        },
        {
            product: 'Штаны Staff cargo kil brown',
            size: 'MXL',
            price: '810 грн.',
            salePrice: '570 грн.',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/86/c4fee785e5e94fe4b5b5205974f9b9e2.jpeg"
        },
        {
            product: 'Поло Staff graphite &amp; white',
            size: 'XS S M L XL XXL',
            price: '450 грн',
            salePrice: '340 грн.',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/90/987e1ee97c4f4f1bb2db96765bddb9c7.jpeg"
        },
        {
            product: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280 грн.',
            salePrice: '400 грн.',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg"
        },


    ])

    return (
        <div className={style.main}>
            <h3>Sale</h3>
        <div className={style.sale}>
                {state.map((product,idx) => (
                    <div className={style.component} key={idx}>
                    <img src={product.image} alt={product.product} title={product.product}/>
                        <div className={style.product}>{product.product}</div>
                        <div className={style.size}>{product.size}</div>
                        <div className={style.price}>{product.salePrice}<p>{product.price}</p></div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                    ))
                }
        </div>
        </div>

    )
}