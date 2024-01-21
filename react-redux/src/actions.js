import { store } from "./App";

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function increaseItem() {
  store.dispatch({ type: INCREASE });
}

export function decreaseItem() {
  store.dispatch({ type: DECREASE });
}

export function clearCart() {
  store.dispatch({ type: CLEAR_CART });
}

export function removeCartItem(id) {
  store.dispatch({ type: REMOVE_ITEM, payload: { id } });
}
