import React from "react";
import {addItemToBoxTC, ProductType} from "../../productsList/Products-reducer";
import s from "./ProductBoxItem.module.css"
import {useDispatch} from "react-redux";
import { Card } from "antd";

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

            <Card type="inner" title={`Product № ${productItem.id}`} >
                <div>{productItem.name}</div>
                <div>{productItem.price}</div>
                <div className={s.buttons}>
                    <button onClick={() => changeInBoxCount("inc")}>+</button>
                    {productItem.inBoxCount}
                    <button onClick={() => changeInBoxCount("dec")}>-</button>
                </div>
            </Card>


    )
}