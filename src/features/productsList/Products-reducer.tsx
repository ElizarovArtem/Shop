import {createAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootStateType} from "../../store/store";

let initialState: Array<ProductType> = [
    {id: 1, name: "Boots", price: "5$", inBoxCount: 0, isInitialized: false},
    {id: 2, name: "Jeans", price: "12$", inBoxCount: 0, isInitialized: false},
    {id: 3, name: "Shorts", price: "8$", inBoxCount: 0, isInitialized: false},
    {id: 4, name: "Heads", price: "15$", inBoxCount: 0, isInitialized: false}
]

export const addItemToBoxTC = createAsyncThunk<{ id: number, type: OperationType },
    { productId: number, operationType: OperationType },
    { state: RootStateType }>("products/addItemToBox", (param, thunkAPI) => {
    const state = thunkAPI.getState()
    const product = state.products.find(p => p.id === param.productId)
    if (product) {
        if (param.operationType === "inc") localStorage.setItem(param.productId.toString(), (product.inBoxCount + 1).toString())
        if (param.operationType === "dec") {
            localStorage.setItem(param.productId.toString(), (product.inBoxCount - 1).toString())
            if ((product.inBoxCount - 1) === 0) {
                localStorage.removeItem(param.productId.toString())
            }
        }
    }
    return {id: param.productId, type: param.operationType}
})
export const setInBoxCountTC = createAsyncThunk<void,
    { id: number},
    { state: RootStateType }>("products/setInBoxCount", (param, thunkAPI) => {
    const count = localStorage.getItem(param.id.toString())
    const product = thunkAPI.getState().products.find(p => p.id === param.id)
    if (count && product) {
        thunkAPI.dispatch(setInBoxCount({product: product, count: +count}))
    }
})

export const setTotalPriceAC = createAction<number>("products/setTotalPrice")

export const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setInBoxCount: (state, action: PayloadAction<{ product: ProductType, count: number}>) => {
            const product = state.find(p => p.id === action.payload.product.id)
            if (product) {
                product.inBoxCount = action.payload.count
                product.isInitialized = true
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(addItemToBoxTC.fulfilled, (state, action) => {
            const product = state.find(p => p.id === action.payload.id)
            if (product) {
                if (action.payload.type === "inc") {
                    product.inBoxCount++
                } else {
                    product.inBoxCount--
                }
            }
        })
    }
})

export const productsReducer = slice.reducer
export const {setInBoxCount} = slice.actions

// types
export type ProductType = {
    id: number
    name: string
    price: string
    inBoxCount: number
    isInitialized: boolean
}
export type OperationType = "inc" | "dec"