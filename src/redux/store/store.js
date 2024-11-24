import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../slice/cartSlice'

const store=configureStore({
    reducer:{
        addCart:cartSlice.reducer
    }
})



export default store