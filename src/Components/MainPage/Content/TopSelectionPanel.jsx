import React from "react";
import style from "./TopSelectionPanel.module.css";
import { NavLink } from "react-router-dom";

export default function TopSelectionPanel() {
    return (
        <div className={style.topSelect}>
            <div className={style.Jackets}><NavLink to='/Jackets'><img src="https://static.staff-clothes.com/uploads/media/default/0001/90/ad2caa7a85ec4ff2b5d8b7b983989809.jpeg" /></NavLink></div>
            <div className={style.Hoodies}><NavLink to='/Hoodies'> <img src="https://static.staff-clothes.com/uploads/media/default/0001/86/e709aed4ed7d4ff9bdcf7058848c6f02.jpeg" /></NavLink></div>
            <div className={style.Pants}><NavLink to='/Pants'> <img src="https://static.staff-clothes.com/uploads/media/default/0001/90/2b238d238fdf4f6e8b9fb28814807f17.jpeg" /></NavLink></div>
            <div className={style.Shoes}><NavLink to='/Shoes'> <img src="https://static.staff-clothes.com/uploads/media/default/0001/87/eb682f0659504f89b9445ae44c795fb6.jpeg" /></NavLink></div>
        </div>
    )
}