import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import searchedBooksReducer from './searched_books_reducer';
import wishlistsReducer from './wishlists_reducer';
import exchangeListsReducer from './exhange_lists_reducer';
import bestSellersReducer from './best_sellers_reducer'
import matchListsReducer from './match_lists_reducers'

const entitiesReducer = combineReducers({
	users: usersReducer,
	books: booksReducer,
	searchedBooks: searchedBooksReducer,
	wishlists: wishlistsReducer,
	exchangeLists: exchangeListsReducer,
	matchLists: matchListsReducer,
	nytBestSellers: bestSellersReducer
});

export default entitiesReducer;