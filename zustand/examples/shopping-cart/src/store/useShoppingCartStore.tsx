import { create } from "zustand";
import { TCartItem } from "../libs/definitions";
import cartItems from "../data/cart-items";

interface Store {
  cart: TCartItem[];
  totalAmount: () => number;
  totalItems: () => number;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

export const useShoppingCartStore = create<Store>()((set, get) => ({
  cart: cartItems,
  totalAmount: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.price).reduce((prev, curr) => prev + curr);
    return 0;
  },

  totalItems: () => {
    const { cart } = get();
    if (cart.length)
      return cart
        .map((item) => item.quantity)
        .reduce((prev, curr) => prev + curr);
    return 0;
  },

  clearCart: () => set({ cart: [] }),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        return item.id !== id ? item : { ...item, quantity: item.quantity + 1 };
      }),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) => {
          return item.id !== id
            ? item
            : { ...item, quantity: item.quantity - 1 };
        })
        .filter((item) => item.quantity >= 1),
    })),

  total: () => set(() => ({})),
}));
