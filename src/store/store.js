import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import porductSlice from "./productSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: porductSlice
  }
})

export default store;