import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cart: cartItems,
  quantity: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },

    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },

    increaseQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload);
      cartItem.amount += 1;
    },

    decreaseQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload);
      cartItem.amount -= 1;
    },

    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;

      state.cart.forEach((item) => {
        quantity += item.amount;
        total += item.price * quantity;
      });

      state.quantity = quantity;
      state.total = total.toFixed(2);
    },
  },
});

export const {
  clearCart,
  remove,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
