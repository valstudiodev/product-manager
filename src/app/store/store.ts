import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/entities/product/model/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>