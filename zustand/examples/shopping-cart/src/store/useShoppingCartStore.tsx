import { create } from "zustand";
import { TCartItem } from "../libs/definitions";
import cartItems from "../data/cart-items";

interface Store {
  cart: TCartItem[];
  totalAmount: number;
  totalItems: number;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

export const useShoppingCartStore = create<Store>()((set) => ({
  cart: cartItems,
  totalAmount: 0,
  totalItems: 0,
  clearCart: () => set({ cart: [] }),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        return item.id !== id ? item : { ...item, quantity: item.quantity + 1 };
      }),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        return item.id !== id ? item : { ...item, quantity: item.quantity - 1 };
      }),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));
