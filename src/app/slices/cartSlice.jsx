import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:{
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

   removeFromCart: (state, action) => {
  const item = state.items.find(
    (i) => i.id === action.payload
  );

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.items = state.items.filter(
      (i) => i.id !== action.payload
    );
  }
},


    clearCart:(state) => {
      state.items.length = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
