import { INCREASE, DECREASE, CLEAR_CART, REMOVE_ITEM } from "./actions";

export function reducer(state, action) {
  if (action.type === INCREASE) {
    console.log("increase");
  }

  if (action.type === DECREASE) {
    console.log("decrease");
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
}
