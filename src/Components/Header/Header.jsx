import style from './Header.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {
    FaShoppingCart
} from "react-icons/all";

const Header = ({cart,loading,priceCount}) => {
   

    return (

        <div className={style.Header}>
            <div className={style.logo}>
                <NavLink to={'/Shop'}> Logo</NavLink>
            </div>

            <div className={style.HeaderMain}>
                <NavLink to='/Shop'>Home</NavLink>
                <NavLink to='/NewRealeases'>New Releases</NavLink>
                <NavLink to='/Man'>Man</NavLink>
                <NavLink to='/Woman'>Woman</NavLink>
            </div>

            <div className={style.Login}>

                <NavLink to={'/Cart'} className={style.cart}>
                    <FaShoppingCart/><div className={style.cartLength}>{ loading?'0':cart>0?cart :'0'} Price: { loading?'0':priceCount?priceCount>0?priceCount :'0':'0'}</div></NavLink>
                {
                    loading?<NavLink to={'/Login'}>Login</NavLink>:<NavLink to={'/Dashboard'}>Logout</NavLink>
                }

            </div>
        </div>
    )

}
export default Header;