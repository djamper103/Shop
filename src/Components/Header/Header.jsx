import style from './Header.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {
    FaShoppingCart
} from "react-icons/all";

const Header = ({cart,priceCount,loading}) => {

    return (

        <div className={style.Header}>
            <div className={style.logo}>
                <NavLink to={'/Home'}> Logo</NavLink>
            </div>

            <div className={style.HeaderMain}>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/NewRealeases'>New Releases</NavLink>
                <NavLink to='/Man'>Man</NavLink>
                <NavLink to='/Woman'>Woman</NavLink>
            </div>

            <div className={style.Login}>

                <NavLink to={'/Cart'} className={style.cart}>
                    <FaShoppingCart/><div className={style.cartLength}>{ loading?'0':cart>0?cart :'0'} Price: {priceCount}</div></NavLink>
                {
                    loading?<NavLink to={'/Login'}>Login</NavLink>:<NavLink to={'/Dashboard'}>Logout</NavLink>
                }

            </div>
        </div>
    )

}
export default Header;