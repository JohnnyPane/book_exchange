import { RECEIVE_WISHLISTS } from '../actions/wishlist_actions';

const wishlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WISHLISTS:
      return action.lists;
    default:
      return state;
  }
};

export default wishlistsReducer;