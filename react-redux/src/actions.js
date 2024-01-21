import { store } from "./App";

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CLEAR_CART = "CLEAR_CART";

export function ClearCart() {
  store.dispatch({ type: CLEAR_CART });
}
