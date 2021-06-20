import React,{useEffect, useState}  from 'react'
import style from './ManMain.module.css'



const ManMain=({addToCart})=>{
    const [state] = useState([
        {
            id: 'Кросовки Staff white&red',
            size: '40 41 41 43 44 45',
            price: '1150',
            priceCount: "1150",
            salePrice: '990',
            image: "https://static.staff-clothes.com/media/cache/image_product_mobile_product/image_product/0001/90/deb4c2dc1b384f279f5424def6921b72.jpeg",
            count: 1,
            type:"shoes"
        },
        {
            id: 'Штаны Staff cargo kil brown',
            size: 'MXL',
            price: '810',
            priceCount: "810",
            salePrice: '570',
            image: "https://static.staff-clothes.com/media/cache/image_product_mobile_product/image_product/0001/91/c09a552a72aa4f3bbc4db2dec836503a.jpeg",
            count: 1,
            type:"pants"
        },
        {
            id: 'Поло Staff graphite &amp; white',
            size: 'XS S M L XL XXL',
            price: '450',
            priceCount: "450",
            salePrice: '340',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/90/987e1ee97c4f4f1bb2db96765bddb9c7.jpeg",
            count: 1,
            type:"polo"
        },
        {
            id: 'Сумка через плечо Staff navy',
            size: 'Универсальный',
            price: '280',
            priceCount: "280",
            salePrice: '400',
            image: "https://static.staff-clothes.com/media/cache/image_product_desktop_catalog/image_product/0001/88/c872241566a84fd6ac52f866cbbf2151.jpeg",
            count: 1,
            type:"bag"
        },


    ])
    const[typeItem,setTypeItem]=useState("all")
    const[priceItem,setPriceItem]=useState(["all"])
    const[productItem,setProductItem]=useState([])
    const[searchItem,setSearchItem]=useState("")

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
      )
      .filter((product) =>
      product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
      );
      setProductItem(newProducts);
  }, [typeItem,priceItem,state,searchItem]);

    useEffect(() => {
        const newProducts = [...state]
          .filter((product) =>
          product.id.toLowerCase().replace(/\s+/g, '').includes(searchItem.toLowerCase()) ? product : 0
          );
          setProductItem(newProducts);
      }, [searchItem,state]);
    

    
    return(

        <div className={style.Content}>
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/89/610dad00ed074fab8bdce984fd3821c6.jpeg"/>
        <div>
            <div>

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
            <input placeholder="Search..." onChange={event=>{setSearchItem(event.target.value.replace(/\s+/g, ''))}}/>

            </div>
        {
        productItem.map((product) => (
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