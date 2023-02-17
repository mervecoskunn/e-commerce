import { createSlice } from "@reduxjs/toolkit";




const initialState={
    cart:JSON.parse(localStorage.getItem("cart")) ?? []

};
export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers: {
        /*
        1.ProductCart icerisine add to cart butonun kullanacagi ekleme operasyonu AddToCart
        2.Cart komponenti icerisindeki her bir satirda bulunan remove butonunun kullanacagi removeFromCart
        3.Cart komponenti icindeki en altta bulunan Remove All butonunun kullanacagi removeAll
        4.Cart komponenti icindeki her bir satirda bulunan + butonunun kullanacagi incrementProduct
        5.Cart komponenti icerisindeki her bir satirda bulunan - butonunun kullanacagi reduceProduct
        */ 

        addToCart(state,action){
            const itemIndex=state.cart.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity +=1;
            }
            else{
                const product ={...action.payload,quantity:1};
                state.cart.push(product);
            
            }
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        removeFromCart(state,action){
            const updatedCart = state.cart.filter((p)=>p.id !== action.payload.id);
            state.cart = updatedCart;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        removeAll(state,action){
            state.cart =[];
            localStorage.setItem("cart",JSON.stringify(state.cart));
        
        },
        reduceProduct(state,action){
            const itemIndex = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(state.cart[itemIndex].quantity>1){
                state.cart[itemIndex].quantity -=1;
            }else{
                const updatedCart =state.cart.filter((p)=>p.id!==action.payload.id);
                state.cart =updatedCart;
            }
            localStorage.setitem("cart",JSON.stringify(state.cart));
        },
        incrementProduct(state,action){
            const itemIndex = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(state.cart[itemIndex].quantity>=1){
                state.cart[itemIndex].quantity+=1;
            }
            localStorage.setItem("cart",JSON.stringify(state.cart));
        }
    }

})
export const {
    addToCart,
    removeFromCart,
    removeAll,
    reduceProduct,
    incrementProduct
   }=CartSlice.actions;
export default CartSlice.reducer;