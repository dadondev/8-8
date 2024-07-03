import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./app/userSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/login", "user/setAuthReady"],
        ignoredPaths: ["user.user"],
      },
    }),
});
