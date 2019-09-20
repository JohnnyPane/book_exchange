import { 
  RECEIVE_WISHLISTS,
  RECEIVE_WISHLIST 
} from '../actions/wishlist_actions';

const wishlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WISHLISTS:
      return action.lists;
    case RECEIVE_WISHLIST:
      const newList = { [action.list.id]: action.list };
      return Object.assign({}, state, newList);
    default:
      return state;
  }
};

export default wishlistsReducer;