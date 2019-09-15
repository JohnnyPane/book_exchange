import { RECEIVE_BOOKS } from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    default: 
      return state;
  }
};

export default booksReducer;