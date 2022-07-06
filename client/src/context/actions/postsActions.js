import { GET_POSTS, REMOVE_POST } from "../reducers/postsReducers";

export const getPosts = (posts) => ({ type: GET_POSTS, payload: posts });

export const removePost = (postId) => ({ type: REMOVE_POST, payload: postId });
