import { createSlice } from "@reduxjs/toolkit";




createSlice({
    name: "ui",
    initialState: {cartIsVisable: false},
    reducers: {
        showCart(state) {
            state.cartIsVisable = true
        },
        hideCart(state) {
            state.cartIsVisable = false
        }
    }
})