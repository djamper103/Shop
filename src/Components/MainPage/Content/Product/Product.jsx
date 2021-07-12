import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import style from "./Product.module.css"
import { BsHeart, BsHeartFill,GrDeliver } from "react-icons/all";


export default function Product({ state, addToCart, removeFromFavorites, addFavorites }) {

  const [products, setProoducts] = useState([])
  const { id } = useParams()
  const [newState, setnewState] = useState([])
  
  useEffect(() => {
      const product = state.filter(item => {
          if (item.id === id) {
              return item.id
          }
      })
      setProoducts(product)   
  }, [id,state])

  const handleSizeChange = (size) =>{
    let a=products.map(item=>{
      item.chosenSize=size
      return item
    })
    setnewState([...a])
  }



  return (
    <div>
      {
        products.map((product) => (
          <div className={style.component} key={product.id}>
            <div className={style.mainContent}>
              <div className={style.image}>
                <img src={product.image} alt={product.id} title={product.id} />
              </div>
              <div className={style.rightContent}>
                <div className={style.title}>
                  <div className={style.productId}>{product.id}</div>
                  <div className={style.favorites}><div className={style.favorite}><span>{product.favorites ? <BsHeartFill onClick={() => {
                    removeFromFavorites(product)
                    { product.favorites = false }
                  }} /> : <BsHeart onClick={() => {
                    addFavorites(product)
                    { product.favorites = true }
                  }} />}</span></div></div>
                </div>
                <div className={style.category}>Категория:{product.type}</div>
                <div className={style.price}>
                            {(product.sale===true) ?
                                <div className={style.price}>
                                    {product.salePrice} грн.
                                    <span>{product.price} грн.</span>
                                </div>
                                :<p>{product.price} грн.</p>
                            }
                </div>
                <div className={style.bonuses}>
                        Бонусы:5грн.
                </div>
                <div className={style.sizeTitle}>Размер</div>
                <div className={style.size}>
                    {product.size.split(" ").map(item => <button key={item} onClick={() => handleSizeChange(item)}>{item}</button>)}
                </div>
                <div className={style.chosenSize}><p>ВЫБРАННЫЙ РАЗМЕР:   </p> <span>{product.chosenSize ? product.chosenSize
                  : "Размер не был выбран"}</span>
                </div>
                <div className={style.addToCartProduct}>
                  <span><button onClick={() => addToCart(product)}>Add to Cart</button></span>
                </div>
                <div className={style.delivery}>
                <NavLink to='/delivery'><GrDeliver/><span>Доставка,оплата,возврат </span></NavLink>
                </div>

              </div>
  
            </div>
            <div className={style.specification}>
              <h3>Описание</h3>
              <div className={style.specificationMain}>
              {product.specification}
              </div>
              {product.specification.replace('.')}
              </div>
          </div>
        ))
      }
    </div>
  )
}