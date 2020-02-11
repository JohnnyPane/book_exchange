import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

import { login, signup } from './util/session_api_util';
import configureStore from './store/store';
import { fetchBooks } from './util/book_api_util';
import { fetchWishlists, fetchWishlist } from './actions/wishlist_actions'
import { bookSearch } from './util/google_book_api_search';
import { createBook } from './util/book_api_util'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser } 
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.bookSearch = bookSearch;
  window.fetchBooks = fetchBooks;
  window.fetchWishlists = fetchWishlists
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.createBook = createBook;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});