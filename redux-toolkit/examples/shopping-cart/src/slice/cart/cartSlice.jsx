import { createSlice, current } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartFromProducts: (state, action) => {
      state.cart = action.payload.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price.toString(),
        img: product.thumbnail || product.images?.[0] || "",
        quantity: 1,
      }));
    },
    clearCart: (state) => {
      state.cart = [];
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload);
    },
    increaseQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload);
      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload);
      if (cartItem) {
        if (cartItem.quantity == 1) {
          state.cart = state.cart.filter((item) => item.id != action.payload);
        } else {
          cartItem.quantity -= 1;
        }
      }
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;

      state.cart.forEach((item) => {
        quantity += item.quantity;
        total += Number(item.price) * item.quantity;
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
  setCartFromProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
