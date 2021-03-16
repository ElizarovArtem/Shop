import React from "react";
import s from "./HeaderComponent.module.css"
import {ProductBoxIcon} from "../ProductBoxIcon/ProductBoxIcon";
import {NavLink, useLocation} from "react-router-dom";

export const HeaderComponent = () => {
    const location = useLocation()

    return (
        <header className={s.header}>
            <NavLink to={"/"}><h1>ElizarovShop</h1></NavLink>
            {location.pathname === "/product-box" ? null : <ProductBoxIcon/>}
        </header>
    )
}