import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

import { login, signup } from './util/session_api_util';
import configureStore from './store/store';
import { fetchBooks } from './util/book_api_util';

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

  window.fetchBooks = fetchBooks;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});