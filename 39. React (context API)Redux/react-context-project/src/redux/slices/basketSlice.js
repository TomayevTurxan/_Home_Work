import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
  };
  
  const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
      addToBasket: (state, action) => {
        const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);
        if (itemIndex !== -1) {
          state.basket[itemIndex].quantity++;
        } else {
          state.basket.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromBasket: (state, action) => {
        const itemIndex = state.basket.findIndex((item) => item.id === action.payload);
        if (itemIndex !== -1) {
          state.basket.splice(itemIndex, 1);
        }
      },
      incrementBasket: (state, action) => {
        const itemIndex = state.basket.findIndex((item) => item.id === action.payload);
        if (itemIndex !== -1) {
          state.basket[itemIndex].quantity++;
        }
      },
      decrementBasket: (state, action) => {
        const itemIndex = state.basket.findIndex((item) => item.id === action.payload);
        if (itemIndex !== -1) {
          state.basket[itemIndex].quantity--;
          if (state.basket[itemIndex].quantity === 0) {
            state.basket.splice(itemIndex, 1);
          }
        }
      },
    },
  });
  
  export const { addToBasket, removeFromBasket, incrementBasket, decrementBasket } = basketSlice.actions;
  
  export default basketSlice.reducer;
  