import { configureStore } from "@reduxjs/toolkit";
import humburgerSlice from "./humburgerSlice";

export const store = configureStore({
  reducer: {
    humburgerSlice,
  },
});
