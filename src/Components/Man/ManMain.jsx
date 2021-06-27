import React, { useEffect, useState } from 'react'
import style from './ManMain.module.css'
import axios from 'axios'


const ManMain = ({ addToCart }) => {

    const [state, setState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
   
    const [typeItem, setTypeItem] = useState("all")
    const [priceItem, setPriceItem] = useState(["all"])
    const [productItem, setProductItem] = useState([])
    const [searchItem, setSearchItem] = useState("")


    useEffect(() => {
        if (fetching) {
            axios.get(`http://localhost:3002/shopItemMan?_limit=4&_page=${currentPage}`)
                .then(response => {
                    setState([...state, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
        
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true)
        }

    }


    useEffect(() => {
        const newProducts = [...state]
            .sort((a, b) => {
                if (priceItem === "mostPrise") {
                    debugger
                    return b.price - a.price
                } else if
                    (priceItem === "lowPrise") {
                    return a.price - b.price
                } else {
                    return 0
                }
            })
            .filter((product) =>
                typeItem === "all" ? product : product.type === typeItem
            )
            .filter((product) =>
                product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
            );
        setProductItem(newProducts);
    }, [typeItem, priceItem, state, searchItem]);

    useEffect(() => {
        const newProducts = [...state]
            .filter((product) =>
                product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
            );
        setProductItem(newProducts);
    }, [searchItem, state]);



    return (

        <div className={style.Content}>
            <div className={style.upImage}>
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/89/610dad00ed074fab8bdce984fd3821c6.jpeg" />
            </div>
            <div>
                <div>

                    <select name="select" onChange={event => { setTypeItem(event.target.value) }}>
                        <option value="all" selected>All</option>
                        <option value="shoes" >Shoes</option>
                        <option value="pants">Pants</option>
                        <option value="polo" >Polo</option>
                        <option value="bag">Bag</option>
                    </select>
                    <select name="select" onChange={event => { setPriceItem(event.target.value) }}>
                        <option value="all" selected>All</option>
                        <option value="mostPrise" >Most Prise</option>
                        <option value="lowPrise">Low Prise</option>
                    </select>
                    <input placeholder="Search..." onChange={event => { setSearchItem(event.target.value.replace(/\s+/g, '')) }} />

                </div>
                {
                    productItem.map((product) => (
                        <div className={style.component} key={product.id}>
                            <img src={product.image} alt={product.id} title={product.id} />
                            <div className={style.product}>{product.id}</div>
                            <div className={style.size}>{product.size}</div>
                            <div className={style.price}>{product.salePrice} грн.<p>{product.price} грн.</p></div>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ManMain;