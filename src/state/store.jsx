import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice";
import postReducer from "./posts/postSlice";
export const store = () =>
  configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
    },
  });
