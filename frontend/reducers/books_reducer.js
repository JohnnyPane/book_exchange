import merge from 'lodash/merge';

import { 
  RECEIVE_BOOKS,
  RECEIVE_BOOK
} from '../actions/book_actions';

import { RECEIVE_WISHLIST } from '../actions/wishlist_actions'

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_WISHLIST:
    //   return merge({}, state, action.books);
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      const newBook = { [action.book.id]: action.book };
      return Object.assign({}, state, newBook);
    default: 
      return state;
  }
};

export default booksReducer;