/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import style from "./Product.module.css";
import { BsHeart, BsHeartFill, GrDeliver } from "react-icons/all";
import CarouselBoxProduct from "./Carousel";

export default function Product({
  state,
  addToCart,
  removeFromFavorites,
  addFavorites,
}) {
  const [products, setProoducts] = useState([]);
  const { id } = useParams();
  const [, setnewState] = useState([]);

  useEffect(() => {
    const product = state.filter((item) => {
      if (item.id === id) {
        return item.id;
      }
    });
    setProoducts(product);
  }, [id, state]);

  const handleSizeChange = (size) => {
    let a = products.map((item) => {
      item.chosenSize = size;
      return item;
    });
    setnewState([...a]);
  };

  return (
    <div>
      {products.map((product) => (
        <div className={style.component} key={product.id}>
          <div className={style.mainContent}>
            <div className={style.image}>
              <div className={style.image1}>
                <img src={product.image} alt={product.id} title={product.id} />
                <img
                  src={product.imageSlide1}
                  alt={product.id}
                  title={product.id}
                />
                <img
                  src={product.imageSlide2}
                  alt={product.id}
                  title={product.id}
                />
              </div>

              <div className={style.CarouselBoxProduct}>
                <CarouselBoxProduct
                  image1={product.image}
                  image2={product.imageSlide1}
                  image3={product.imageSlide2}
                />
              </div>
            </div>
            <div className={style.rightContent}>
              <div className={style.title}>
                <div className={style.productId}>{product.id}</div>

                <div className={style.favorites}>
                  <div className={style.favorite}>
                    <span>
                      {product.favorites ? (
                        <BsHeartFill
                          size="21px"
                          onClick={() => {
                            removeFromFavorites(product);
                            {
                              product.favorites = false;
                            }
                          }}
                        />
                      ) : (
                        <BsHeart
                          size="21px"
                          onClick={() => {
                            addFavorites(product);
                            {
                              product.favorites = true;
                            }
                          }}
                        />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className={style.category}>??????????????????:{product.type}</div>

              <div className={style.price}>
                {product.sale === true ? (
                  <div className={style.price}>
                    {product.salePrice} ??????.
                    <span>{product.price} ??????.</span>
                  </div>
                ) : (
                  <p>{product.price} ??????.</p>
                )}
              </div>

              <div className={style.bonuses}>????????????:5??????.</div>

              <div className={style.sizeTitle}>????????????</div>

              <div className={style.size}>
                {product.size.split(" ").map((item) => (
                  <button key={item} onClick={() => handleSizeChange(item)}>
                    {item}
                  </button>
                ))}
              </div>

              <div className={style.chosenSize}>
                <p>?????????????????? ????????????: </p>{" "}
                <span>
                  {product.chosenSize
                    ? product.chosenSize
                    : "???????????? ???? ?????? ????????????"}
                </span>
              </div>

              <div className={style.addToCartProduct}>
                <span>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </span>
              </div>

              <div className={style.delivery}>
                <NavLink to="/delivery">
                  <GrDeliver />
                  <span>????????????????,????????????,?????????????? </span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className={style.specification}>
            <h3>????????????????</h3>

            <div className={style.specificationMain}>
              {product.specification.split(".").map((item) => (
                <p key={item}>{item}.</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
