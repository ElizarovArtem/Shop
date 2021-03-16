import React from "react";
import s from "./HeaderComponent.module.css"
import {ProductBoxIcon} from "../ProductBoxIcon/ProductBoxIcon";
import {NavLink} from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <header className={s.header}>
            <NavLink to={"/"}><h1>ElizarovShop</h1></NavLink>
            <ProductBoxIcon/>
        </header>
    )
}