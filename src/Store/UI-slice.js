import { createSlice } from "@reduxjs/toolkit";




createSlice({
    name: "ui",
    initialState: {cartIsVisable: false},
    reducers: {
        toggle(state) {
            state.cartIsVisable = !state.cartIsVisable
        }
    }
})