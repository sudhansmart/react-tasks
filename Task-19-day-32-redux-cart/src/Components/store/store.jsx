import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import quantitySlice from "./quantitySlice";


 const store = configureStore({
    reducer:{
      cart : cartSlice,
      quantity : quantitySlice
    }
 })
 export default store