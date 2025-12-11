import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
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
