import React from "react";
import s from "./ProductBoxIcon.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {ShoppingCartOutlined} from "@ant-design/icons";

export const ProductBoxIcon = () => {
    const totalPrice = useSelector<RootStateType, number>(state => state.productBox.totalPrice);

    return (
        <div className={s.iconBoxComp}>
            <NavLink to={"/product-box"}><ShoppingCartOutlined style={{fontSize: "45px"}}/></NavLink>
            <div className={s.number}>
                <span>{totalPrice}$</span>
            </div>
        </div>
    )
}