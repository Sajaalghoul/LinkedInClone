import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action) => {
      state.comments = state.posts.filter((comment) => comment.id !== action.payload);
    },
  },
});
export const { setComments,addComment } = commentSlice.actions;
export default commentSlice.reducer;
