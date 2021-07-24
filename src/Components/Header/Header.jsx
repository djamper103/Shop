import style from './Header.module.css'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaShoppingCart,
    BsHeart,
    BsList,IoCloseOutline
} from "react-icons/all";

const Header = ({ cart, loadingg, priceCount }) => {
    const [activeMenu,setActiveMenu]=useState(false)

    return (

        <div className={style.Header}>
            <div className={style.logo}>
                <NavLink to={'/Shop'}> Logo</NavLink>
            </div>

            <div className={style.HeaderMain}>
                <NavLink to='/Shop'>Home</NavLink>
                <NavLink to='/Man'>Man</NavLink>
                <NavLink to='/Woman'>Woman</NavLink>
                <NavLink to='/Shoes'>Shoes</NavLink>
            </div>
            
            <div className={style.menu}>
                <button onClick={()=>setActiveMenu(!activeMenu)}>{activeMenu?<IoCloseOutline size = '35px'/>:<BsList size = '35px'/>}</button>
                <ul className={activeMenu?style.menu1:style.menu2} onClick={()=>setActiveMenu(false)} >
                    <li><NavLink to='/Shop'>Home</NavLink></li>
                    <li><NavLink to='/Man'>Man</NavLink></li>
                    <li><NavLink to='/Woman'>Woman</NavLink></li>
                    <li><NavLink to='/Shoes'>Shoes</NavLink></li>
                </ul>
            </div>
            <div className={style.Login}>

                <NavLink to={'/Cart'} className={style.cart}>
                    <FaShoppingCart /><div className={style.cartLength}>{loadingg ? cart > 0 ? cart : '0':'0' } </div>
                </NavLink>
                    
                <NavLink to={'/Cart'} className={style.cart}>
                <div className={style.price}>Price: {loadingg ?priceCount ? priceCount > 0 ? priceCount: '0'  : '0' : '0'}</div>
                </NavLink>
                    <NavLink to={'/Favorites'}> <BsHeart/></NavLink>     
                {
                    loadingg ?  <NavLink to={'/Dashboard'}>Logout</NavLink>:<NavLink to={'/Login'}>Login</NavLink> 
                }

                
                    
            </div>
        </div>
    )

}
export default Header;