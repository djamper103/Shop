import React,{useEffect, useState}  from 'react'
import style from './ManMain.module.css'



const ManMain=({addToCart})=>{
    const [state] = useState([
        {
            id: 'Кросовки Staff white&red',
            size: '40 41 41 43 44 45',
            price: '1150',
            salePrice: '990',
            image: "https://static.staff-clothes.com/media/cache/image_product_mobile_product/image_product/0001/90/deb4c2dc1b384f279f5424def6921b72.jpeg",
            count: 1,
            type:"shoes"
        },
        {
            id: 'Штаны Staff cargo kil brown',
            size: 'MXL',
            price: '810',
            salePrice: '570',
            image: "https://static.staff-clothes.com/media/cache/image_product_mobile_product/image_product/0001/91/c09a552a72aa4f3bbc4db2dec836503a.jpeg",
            count: 1,
            type:"pants"
        },
        {
            id: 'Поло Staff graphite &amp; white',
            size: 'XS S M L XL XXL',
            price: '450',
            salePrice: '340',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/90/987e1ee97c4f4f1bb2db96765bddb9c7.jpeg",
            count: 1,
            type:"polo"
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1,
            type:"bag"
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1,
            type:"bag"
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1,
            type:"bag"
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1,
            type:"bag"
        },


    ])
    const[searchItem,setSearchItem]=useState("")

    
    return(

        <div className={style.Content}>
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/89/610dad00ed074fab8bdce984fd3821c6.jpeg"/>
        <div>
            <div>

            <input placeholder="Search..." onChange={event=>{setSearchItem(event.target.value)}}/>

            </div>
        {state.filter(product=>{
            if(searchItem==""){
                return product
            }else if(product.id.toLowerCase().includes(searchItem.toLowerCase())){
                return product
            }
        }).map((product) => (
                    <div className={style.component} key={product.id}>
                    <img src={product.image} alt={product.id} title={product.id}/>
                        <div className={style.product}>{product.id}</div>
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
export default ManMain;