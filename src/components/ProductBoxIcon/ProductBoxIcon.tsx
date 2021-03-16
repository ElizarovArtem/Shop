import React from "react";
import s from "./ProductBoxIcon.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";

export const ProductBoxIcon = () => {
    const generalCount = useSelector<RootStateType, number>(state => state.productBox.generalCount);

    return (
        <div className={s.iconBoxComp}>
            <NavLink to={"/product-box"}><div className={s.boxImage}/></NavLink>
            <div className={s.number}>{generalCount}</div>
        </div>
    )
}