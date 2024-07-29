import { CLEAR_CART, REMOVE, TOGGLE_AMOUNT, GET_TOTALS } from "./actions";

export function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === TOGGLE_AMOUNT) {
    const newCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.type === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }

      return cartItem;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === GET_TOTALS) {
    const { totalAmount, totalItems } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.totalItems += amount;
        cartTotal.totalAmount = cartTotal.totalItems * price;

        return cartTotal;
      },

      {
        totalAmount: 0,
        totalItems: 0,
      }
    );

    return { ...state, totalAmount, totalItems };
  }

  return state;
}
