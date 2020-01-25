import { connect } from 'react-redux';

import WishlistIndex from './wishlist_index';
import { fetchWishlists } from '../../actions/wishlist_actions';

const mapStateToProps = state => ({
  wishlists: Object.keys(state.entities.wishlists).map(
    key => state.entities.wishlists[key]
  )
});

const mapDispatchToProps = dispatch => ({
  fetchWishlists: () => dispatch(fetchWishlists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistIndex);