import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootStateType} from "../../store/store";

let initialState = [
    {id: 1, name: "Boots", price: "5$", inBoxCount: 0},
    {id: 2, name: "Jeans", price: "12$", inBoxCount: 0},
    {id: 3, name: "Shorts", price: "8$", inBoxCount: 0},
    {id: 4, name: "Heads", price: "15$", inBoxCount: 0}
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

export const setInBoxCountTC = createAsyncThunk<any,
    { id: number},
    {}>("products/setInBoxCount", (param, thunkAPI) => {
    const count = localStorage.getItem(param.id.toString())
    if (count) {
        thunkAPI.dispatch(setInBoxCount({id: param.id, count: +count}))
    }
})

export const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setInBoxCount: (state, action: PayloadAction<{ id: number, count: number}>) => {
            const product = state.find(p => p.id === action.payload.id)
            if (product) {
                product.inBoxCount = action.payload.count
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
}
export type OperationType = "inc" | "dec"