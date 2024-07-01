import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./app/userSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
