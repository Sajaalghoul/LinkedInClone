import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/UserSlice";
import postReducer from "./posts/postSlice";
import commentReducer from "./comments/commentSlice";
export const store = () =>
  configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
      comments: commentReducer,
    },
  });
