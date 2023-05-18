import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
       
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload,
            existingItem = state.items.find(item => item.id === newItem.id)
            if(!existingItem) {
                state.items.push(newItem)
            }
        },
        removeItemFromCart() {},

    }
})