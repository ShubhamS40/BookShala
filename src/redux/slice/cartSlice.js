import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.item.push(action.payload)
        }
    }
})


export const {addCart}=cartSlice.actions  
export default cartSlice