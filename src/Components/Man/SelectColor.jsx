import React from "react";
import style from "./SelectColor.module.css";

export default function SelectColor() {
    return (
        <div className={style.Color}>
            <h3>Select Color</h3>
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <div className={style.circle5}></div>
        </div>
    )
}