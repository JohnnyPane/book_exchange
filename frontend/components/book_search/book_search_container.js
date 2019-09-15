import { connect } from 'react-redux';

import BookSearch from './book_search';
import { asArray } from '../../reducers/selectors';
import { googleBooks } from '../../actions/book_actions';

const mapStateToProps = state => ({
  searchedBooks: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  googleBooks: input => dispatch(googleBooks(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);