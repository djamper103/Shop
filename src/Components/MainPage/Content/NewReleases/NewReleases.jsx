import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import style from "./NewReleases.module.css";
import _ from "lodash"



const  NewReleases=({state,addToCart,})=> {
    const[typeItem,setTypeItem]=useState("all")
    const[priceItem,setPriceItem]=useState(["all"])
    const[productItem,setProductItem]=useState([])
    const[productMostPriceItem,setProductMostPriceItem]=useState([])
    const[productLowPriceItem,setProductLowPriceItem]=useState([])

    useEffect(() => {
        setProductItem(state)

    }, [state])

    useEffect(() => {
        setProductMostPriceItem(productItem.sort((a,b)=>b.price-a.price))

    }, [priceItem,productItem])

    useEffect(() => {
        setProductLowPriceItem(productItem.sort((a,b)=>a.price-b.price))

    }, [priceItem,productItem])


    return (
        <div className={style.main}>
            <h3>New Releases</h3>
            <select name="select" onChange={event=>{setTypeItem(event.target.value)}}>
                <option value="all" selected>All</option>
                <option value="shoes" >Shoes</option>
                <option value="pants">Pants</option>
                <option value="polo" >Polo</option>
                <option value="bag">Bag</option>
            </select>
            <select name="select" onChange={event=>{setPriceItem(event.target.value)}}>
                <option value="all" selected>All</option>
                <option value="mostPrise" >Most Prise</option>
                <option value="lowPrise">Low Prise</option>
            </select>
            <div className={style.sale}>

                {  
                    productItem.filter(product=>{
                        if (priceItem==="mostPrise"){
                            debugger
                            return productMostPriceItem                 
                        }else if (product==="lowPrise"){
                            debugger
                                return productLowPriceItem
                            }    
                        else{
                            
                            return productItem
                        }
                        
                    }).filter((product)=>{
                        if(product.type===typeItem){
                            return product
                        }else if (typeItem==="all"){
                            return state
                        }
                    }).map((product) => (
                    <div className={style.component} key={product.id}>
                        <NavLink to={`/Product/${product.id}`}>
                    <img src={product.image} alt={product.id} title={product.id}/>
                        <div className={style.product}>{product.id}</div>
                        </NavLink>
                        <div className={style.size}>{product.size}</div>
                        <div className={style.price}><p>{product.price} грн.</p></div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                    ))
                }
            </div>

        </div>

    )
}
export default NewReleases;