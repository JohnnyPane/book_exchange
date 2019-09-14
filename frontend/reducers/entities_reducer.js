import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import searchedBooksReducer from './searched_books_reducer';

const entitiesReducer = combineReducers({
	users: usersReducer,
	books: booksReducer,
	searchedBooks: searchedBooksReducer
});

export default entitiesReducer;