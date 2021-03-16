import {createSlice} from "@reduxjs/toolkit";
import { addItemToBoxTC, setInBoxCount } from "../productsList/Products-reducer";

export const slice = createSlice({
    name: "productBox",
    initialState: {
        generalCount: 0
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addItemToBoxTC.fulfilled, (state, action) => {
            if (action.payload.type === "inc") {
                state.generalCount++
            } else {
                state.generalCount--
            }
        })
            .addCase(setInBoxCount, (state, action) => {
                state.generalCount += action.payload.count
            })
    }
})

export const productBoxReducer = slice.reducer