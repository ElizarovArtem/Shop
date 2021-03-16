import React from "react";
import {addItemToBoxTC, ProductType} from "../../productsList/Products-reducer";
import s from "./ProductBoxItem.module.css"
import {useDispatch} from "react-redux";

type ProductBoxItemPropsType = {
    productItem: ProductType
}
export const ProductBoxItem: React.FC<ProductBoxItemPropsType> = ({productItem}) => {
    const dispatch = useDispatch()
    const changeInBoxCount = (type: "inc" | "dec") => {
        if (type === "inc") {
            dispatch(addItemToBoxTC({productId: productItem.id, operationType: type}))
        } else {
            dispatch(addItemToBoxTC({productId: productItem.id, operationType: type}))
        }
    }

    return (
        <div className={s.productItem}>
            <div>{productItem.name}</div>
            <div>{productItem.price}</div>
            <div>{productItem.inBoxCount}</div>
            <div className={s.buttons}>
                <button onClick={() => changeInBoxCount("inc")}>+</button>
                <button onClick={() => changeInBoxCount("dec")}>-</button>
            </div>
        </div>
    )
}