import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cardSlice'
//import userReducer from './userSlice'
const appStore = configureStore({
    reducer:{
        cart: cartReducer,
       // user: userReducer,
    }
})

export default appStore;