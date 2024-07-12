import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
    reducer:{dataSlice:dataSlice.reducer, modalSlice:modalSlice.reducer}
})
export default store