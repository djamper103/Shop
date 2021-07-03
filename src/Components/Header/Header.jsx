import style from './Header.module.css'
import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaShoppingCart,
    BsHeart
} from "react-icons/all";

const Header = ({ cart, loadingg, priceCount }) => {


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

            <div className={style.Login}>

                <NavLink to={'/Cart'} className={style.cart}>
                    <FaShoppingCart /><div className={style.cartLength}>{loadingg ? cart > 0 ? cart : '0':'0' } Price: {loadingg ?priceCount ? priceCount > 0 ? priceCount: '0'  : '0' : '0'}</div></NavLink>
                    
                    <NavLink to={'/Favorites'}> <BsHeart/></NavLink>
                
                {
                    loadingg ?  <NavLink to={'/Dashboard'}>Logout</NavLink>:<NavLink to={'/Login'}>Login</NavLink> 
                }

            </div>
        </div>
    )

}
export default Header;