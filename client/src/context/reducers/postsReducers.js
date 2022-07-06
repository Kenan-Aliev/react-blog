export const GET_POSTS = "GET_POSTS";
export const REMOVE_POST = "REMOVE_POST";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return action.payload;
    }
    case REMOVE_POST: {
      return state.filter((post) => {
        return post.id !== action.payload;
      });
    }
    default:
      return state;
  }
};
