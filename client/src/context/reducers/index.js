import { postsReducer } from "./postsReducers";

const mainReducer = ({ posts }, action) => {
  return {
    posts: postsReducer(posts, action),
  };
};

export default mainReducer;
