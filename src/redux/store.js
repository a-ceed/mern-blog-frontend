import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slies/posts";
import { authReducer } from "./slies/auth";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
  },
});

export default store;
