import { SEARCH_BOOKS } from '../actions/book_actions';

const searchedBooksReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case SEARCH_BOOKS:
      return action.books;
    default: 
      return state;
  }
};

export default searchedBooksReducer;