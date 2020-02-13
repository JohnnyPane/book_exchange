import * as APIUtil from '../util/wishlist_api_util';

export const RECEIVE_WISHLISTS = 'RECEIVE_WISHLISTS';
export const RECEIVE_WISHLIST = 'RECEIVE_WISHLIST';


export const receiveWishlists = lists => ({
  type: RECEIVE_WISHLISTS,
  lists
});

export const receiveWishlist = ({ wishlist, books }) => ({
  type: RECEIVE_WISHLIST,
  wishlist,
  books
});

export const fetchWishlists = () => dispatch => (
  APIUtil.fetchWishlists().then(lists => (
    dispatch(receiveWishlists(lists))
  ))
);

export const fetchWishlist = id => dispatch => (
  APIUtil.fetchWishlist(id).then(list => (
    dispatch(receiveWishlist(list))
  ))
);

export const createWishlist = list => dispatch => (
  APIUtil.createWishlist(list).then(list => (
    dispatch(receiveWishlist(list))
  ))
);