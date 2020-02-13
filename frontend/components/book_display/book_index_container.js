import { connect } from 'react-redux';

import BookIndex from './book_index';
import { asArray } from '../../reducers/selectors';
import { fetchBooks, createBook } from '../../actions/book_actions';
import { googleBooks } from '../../actions/book_actions';
import { fetchWishlists, createWishlist } from '../../actions/wishlist_actions';
import { fetchExchangeLists } from '../../actions/exchange_list_actions';


const mapStateToProps = state => ({
  books: Object.keys(state.entities.books).map(
    key => state.entities.books[key]
  ),
  searchedBooks: Object.keys(state.entities.searchedBooks).map(
    key => state.entities.searchedBooks[key]
  ),
  wishlists: Object.keys(state.entities.wishlists).map(
    key => state.entities.wishlists[key]
  ),
  exchangeLists: Object.keys(state.entities.exchangeLists).map(
    key => state.entities.exchangeLists[key]
  )
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  googleBooks: input => dispatch(googleBooks(input)),
  createBook: book => dispatch(createBook(book)),
  fetchWishlists: () => dispatch(fetchWishlists()),
  fetchExchangeLists: () => dispatch(fetchExchangeLists()),
  createWishlist: list => dispatch(createWishlist(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);