import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart/cartSlice";
import modalReducer from "./slice/modal/modalSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./services/productsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
