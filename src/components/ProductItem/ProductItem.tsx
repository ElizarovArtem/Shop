import {ProductType, setInBoxCountTC} from "../../features/productsList/Products-reducer";
import React, {useEffect} from "react";
import s from "./ProductItem.module.css"
import {useDispatch} from "react-redux";
import {Button, Card} from 'antd';

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
        <Card title={product.name} type={"inner"} hoverable>
            <p>Price: {product.price}</p>
            <Button type="primary" size={"middle"} onClick={onAddProductToBox}>
                Primary
            </Button>
        </Card>
    )
}