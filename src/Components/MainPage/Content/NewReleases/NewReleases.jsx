import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import style from "./NewReleases.module.css";



const  NewReleases=({state,addToCart,})=> {
    const[typeItem,setTypeItem]=useState("all")
    const[priceItem,setPriceItem]=useState(["all"])
    const[productItem,setProductItem]=useState([])

  useEffect(() => {
    const newProducts = [...state]
      .sort((a, b) => {
        if (priceItem === "mostPrise"){
            debugger
            return  b.price-a.price
        }else if 
          (priceItem === "lowPrise"){
          return a.price-b.price
        }else{
            return 0
        }
      })
      .filter((product) =>
      typeItem === "all" ? product : product.type === typeItem
      );
      setProductItem(newProducts);
  }, [typeItem, priceItem,state]);


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
            {productItem.map((product) => (
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
export default NewReleases;