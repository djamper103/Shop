import React,{useEffect,useState} from 'react'
import style from './MainPage.module.css'
import Sale from "./Content/SaleMain/Sale";
import NewReleases from "./Content/NewReleases/NewReleases";
import TopSelectionPanel from "./Content/TopSelectionPanel";
import MainUpContent from "./Content/MainUpContent";



const MainPage = ({state,addToCart,removeFromCart}) => {
    // const [state,setState]=useState([])
    // const [currentPage,setCurrentPage]=useState(1)
    // const [fetching,setFetching]=useState(true)
    // const [totalCount,setTotalCount]=useState(0)
    //
    //
    // useEffect(()=>{
    //     if(fetching){
    //         console.log('fetching')
    //         axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=16&_page=${currentPage}`)
    //             .then(response=>{
    //                 setState([...state,...response.data])
    //                 setCurrentPage(prevState=>prevState+1)
    //                 setTotalCount(response.headers['x-total-count'])
    //             })
    //             .finally(()=>setFetching(false))
    //
    //     }
    //
    // },[fetching])
    //
    // useEffect(()=>{
    //     document.addEventListener('scroll',scrollHandler)
    //
    //     return function () {
    //         document.removeEventListener('scroll',scrollHandler)
    //     }
    // },[])
    // const scrollHandler=(e)=>{
    //     if(e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<1 ){
    //         setFetching(true)
    //     }
    //
    // }
    //
    // const [cart,setCart]=useState([])
    //
    // const addToCart=(product)=>{
    //     console.log(cart.length)
    //     setCart([...cart,product])
    // }
    return (
        <div className={style.Maincontent}>

            <MainUpContent/>
            <TopSelectionPanel/>
            <Sale addToCart={addToCart}/>
            <NewReleases state={state} addToCart={addToCart} removeFromCart={removeFromCart}/>
        </div>
    )
}
export default MainPage;