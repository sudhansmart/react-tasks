import { createSlice } from "@reduxjs/toolkit";

const quantitySlice =createSlice({
    name : "quantity",
    initialState : {},
    reducers:{
        addQty: (state, action) => {
            const { productId } = action.payload;
            if (state[productId]) {
              state[productId]++;
            } else {
              state[productId] = 1;
            }
          },
          removeQty: (state, action) => {
            const { productId } = action.payload;
            if (state[productId] && state[productId] > 1) {
              state[productId]--;
            }
          },
          resetQty :(state,action)=>{
            const  productId  = action.payload;
             if (state[productId]) {
              state[productId] = 0; 
            }
            
          }
      }
    
})
export const{addQty,removeQty,resetQty}=quantitySlice.actions;
export default quantitySlice.reducer;