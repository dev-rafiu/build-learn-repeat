import cartItems from "./cart-items";
import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  cart: cartItems,
  totalAmount: 0,
  totalItems: 0,
};

export const store = createStore(reducer, initialState);
