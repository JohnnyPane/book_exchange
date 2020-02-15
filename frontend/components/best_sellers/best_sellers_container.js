import connect from 'react-redux';

import NYTBestSellers from './best_sellers';
import { nytBooks } from '../../actions/book_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  bestSellersList: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  nytBooks: input => dispatch(nytBooks(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NYTBestSellers);