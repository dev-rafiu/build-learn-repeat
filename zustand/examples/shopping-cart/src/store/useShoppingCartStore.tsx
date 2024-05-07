import { create } from "zustand";
import { TCartItem } from "../libs/definitions";
import cartItems from "../data/cart-items";

interface Store {
  cart: TCartItem[];
  totalAmount: number;
  totalItems: number;
}

export const useShoppingCartStore = create<Store>()(() => ({
  cart: cartItems,
  totalAmount: 0,
  totalItems: 0,
}));
