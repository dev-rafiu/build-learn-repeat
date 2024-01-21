import { INCREASE, DECREASE, CLEAR_CART } from "./actions";

export function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    // console.log("clear cart");
    return { ...state, cart: [] };
  }

  return state;
}
