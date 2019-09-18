import * as APIUtil from '../util/book_api_util';
import { bookSearch } from '../util/google_book_api_search';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const searchBooks = books => ({
  type: SEARCH_BOOKS,
  books
});

export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks().then(books => (
    dispatch(receiveBooks(books))
  ))
);

export const fetchBook = id => dispatch => (
  APIUtil.fetchBook(id).then(book => (
    dispatch(receiveBook(book))
  ))
);

export const createBook = book => dispatch => (
  APIUtil.createBook(book).then(book => (
    dispatch(receiveBook(book))
  ))
);

export const googleBooks = input => dispatch => (
  bookSearch(input).then(books => (
    dispatch(searchBooks(books))
  ))
);

