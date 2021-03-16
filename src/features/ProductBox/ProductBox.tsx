import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {ProductType} from "../productsList/Products-reducer";
import {ProductBoxItem} from "./ProductBoxItem/ProductBoxItem";

type ProductBoxPropsType = {
    filteredProducts: Array<ProductType>
}
export const ProductBox: React.FC<ProductBoxPropsType> = ({filteredProducts}) => {
    const totalPrice = useSelector<RootStateType, number>(state => state.productBox.totalPrice);

    return (
        <div style={{textAlign: "center"}}>
            {!filteredProducts.length && <div>Your box is empty</div>}
            <div>{filteredProducts.map(p => <ProductBoxItem productItem={p} key={p.id}/>)}</div>
            <div>Total Price: {totalPrice}$</div>
            <button>Make order</button>
        </div>
    )
}