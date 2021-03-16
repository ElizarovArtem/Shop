import {useDispatch, useSelector} from "react-redux";
import {addItemToBoxTC, OperationType, ProductType} from "./Products-reducer";
import {RootStateType} from "../../store/store";
import {ProductItem} from "../../components/ProductItem/ProductItem";
import React from "react";


function ProductList() {
    const products = useSelector<RootStateType, Array<ProductType>>(state => state.products)
    const dispatch = useDispatch()

    const changeProductBoxCount = (id: number, operationType: OperationType) => {
        dispatch(addItemToBoxTC({productId: id, operationType}))
    }

    return (
        <div className="mainBody">
            {products.map(p => <ProductItem onInBoxCountChange={changeProductBoxCount} product={p} key={p.id}/>)}
        </div>
    );
}

export default ProductList;
