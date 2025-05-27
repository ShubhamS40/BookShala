import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: []
    },
    reducers: {
        addCart: (state, action) => {
            state.item.push(action.payload)
        },
        removeFromCart: (state, action) => {
            // Remove the item with the specified id
            state.item = state.item.filter(item => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            // Find the item and update its quantity
            const { id, quantity } = action.payload
            const itemToUpdate = state.item.find(item => item.id === id)
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity
            }
        }
    }
})

export const { addCart, removeFromCart, updateQuantity } = cartSlice.actions  
export default cartSlice