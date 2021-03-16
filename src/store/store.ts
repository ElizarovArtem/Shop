import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {productsReducer} from "../features/productsList/Products-reducer";
import {productBoxReducer} from "../features/ProductBox/ProductBox-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    products: productsReducer,
    productBox: productBoxReducer
})

export type RootStateType = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})