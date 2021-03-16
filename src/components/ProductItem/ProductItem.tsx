import {ProductType, setInBoxCountTC} from "../../features/productsList/Products-reducer";
import React, {useEffect} from "react";
import s from "./ProductItem.module.css"
import {useDispatch} from "react-redux";

type ProductItemType = {
    product: ProductType
    onInBoxCountChange: (productId: number, operationType: "inc" | "dec") => void
}
export const ProductItem: React.FC<ProductItemType> = ({product, ...props}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setInBoxCountTC({id: product.id}))
    }, [])

    const onAddProductToBox = () => {
        props.onInBoxCountChange(product.id,"inc")
    }

    return (
        <div className={s.productItem}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.inBoxCount}</div>
            <div>
                <button onClick={onAddProductToBox}>Add</button>
            </div>
        </div>
    )
}