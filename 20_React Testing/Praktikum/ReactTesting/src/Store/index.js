import { configureStore } from "@reduxjs/toolkit";
import products from "./Product/ProductSlices";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
