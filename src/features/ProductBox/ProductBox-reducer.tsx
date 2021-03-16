import {createSlice} from "@reduxjs/toolkit";
import {addItemToBoxTC, setInBoxCount, setTotalPriceAC} from "../productsList/Products-reducer";

export const slice = createSlice({
    name: "productBox",
    initialState: {
        generalCount: 0,
        totalPrice: 0
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addItemToBoxTC.fulfilled, (state, action) => {
                if (action.payload.type === "inc") {
                    state.generalCount++
                } else {
                    state.generalCount--
                }
            })
            .addCase(setInBoxCount, (state, action) => {
                if (!action.payload.product.isInitialized) {
                    state.generalCount += action.payload.count
                }
            })
            .addCase(setTotalPriceAC, (state, action) => {
                state.totalPrice = action.payload
            })
    }
})

export const productBoxReducer = slice.reducer