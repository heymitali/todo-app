import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./taskSlice";
const appStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default appStore;
