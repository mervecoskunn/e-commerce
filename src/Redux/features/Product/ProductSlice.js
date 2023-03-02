import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {STATUS} from "../../../constant/Status";
 const base_url ="https://fakestoreapi.com/";


 const initialState={
    status: "" ,
    products: []
}

const productSlice=createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>{
        builder
           .addCase(fetchProducts.pending,(state,action) =>{
            state.status = STATUS.LOADING;
            console.log("data is coming")
        
        })
           .addCase(fetchProducts.fulfilled,(state,action) =>{
            state.products =action.payload;
            state.status =STATUS.IDLE;
            console.log("data came")
        })
           .addCase(fetchProducts.rejected,(state,action) =>{
            state.status =STATUS.ERROR;
            console.log("error")
        })
    }
})
        //fetchProducts.pending,fetchProducts.fullFilled,fetchProducts.rejected
export const fetchProducts = createAsyncThunk("fetch/products",async ()=>{
    console.log("axios start")
    const data = await axios.get(`${base_url}products`).then((res)=>res.data);
    console.log("axios completad")
    return data;
});
export default productSlice.reducer;