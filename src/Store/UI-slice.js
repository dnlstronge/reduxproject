import { createSlice } from "@reduxjs/toolkit";




const uiSlice = createSlice({
    name: "ui",
    initialState: {cartIsVisible: false, notifcation: null},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notifcation = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})
export const uiSliceActions = uiSlice.actions;
export default uiSlice;