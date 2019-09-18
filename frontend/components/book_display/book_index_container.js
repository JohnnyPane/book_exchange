import { connect } from 'react-redux';

import BookIndex from './book_index';
import { asArray } from '../../reducers/selectors';
import { fetchBooks, createBook } from '../../actions/book_actions';
import { googleBooks } from '../../actions/book_actions';


const mapStateToProps = state => ({
  books: Object.keys(state.entities.books).map(key => state.entities.books[key]),
  searchedBooks: Object.keys(state.entities.searchedBooks).map(key => state.entities.searchedBooks[key])
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  googleBooks: input => dispatch(googleBooks(input)),
  createBook: book => dispatch(createBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);