import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Redux/features/Cart/CartSlice'
import ProductReducer from '../Redux/features/Product/ProductSlice'
import WishListReducer from "../Redux/features/Wishlist/WishListSlice"
export const store=configureStore({
    reducer:{
        products: ProductReducer,
       cart:CartReducer,
       wishlist: WishListReducer,
    }

});