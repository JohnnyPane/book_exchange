import merge from "lodash/merge";

import { 
  RECEIVE_WISHLISTS,
  RECEIVE_WISHLIST 
} from '../actions/wishlist_actions';

import { RECEIVE_BOOKS } from '../actions/book_actions'

const wishlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WISHLISTS:
      return action.lists;
    case RECEIVE_WISHLIST:
      const newList = { [action.wishlist.id]: action.wishlist };
      return Object.assign({}, state, newList);
    // case RECEIVE_BOOKS:
    //   const { book } = action;
    //   const newState = merge({}, state);
    //   newState[book.wishlist_id].bookIds.push(book.id);
    //   return newState
    default:
      return state;
  }
};

export default wishlistsReducer;