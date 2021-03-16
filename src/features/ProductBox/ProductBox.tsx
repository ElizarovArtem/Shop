import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {ProductType} from "../productsList/Products-reducer";
import {ProductBoxItem} from "./ProductBoxItem/ProductBoxItem";

export const ProductBox = () => {
    const products = useSelector<RootStateType, Array<ProductType>>(state => state.products)
    const filteredProducts = products.filter(p => p.inBoxCount > 0)

    return (
        <div style={{textAlign: "center"}}>
            {!filteredProducts.length && <div>Your box is empty</div>}
            <div>{filteredProducts.map(p => <ProductBoxItem productItem={p} key={p.id}/>)}</div>

        </div>
    )
}