import { connect } from 'react-redux';

import { fetchWishlist } from '../../actions/wishlist_actions';
import { selectBooksForList, selectWishlist } from '../../reducers/selectors';
import WishlistShow from './wishlist_show';

const mapStateToProps = (state, {match}) => {
  const wishlistId = parseInt(match.params.wishlistId);
  const wishlist = selectWishlist(state.entities, wishlistId)
  const books = selectBooksForList(state.entities, wishlist);
  return {
    wishlistId,
    wishlist,
    books
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWishlist: id => dispatch(fetchWishlist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistShow);
