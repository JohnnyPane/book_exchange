import * as APIUtil from '../util/wishlist_api_util';

export const RECEIVE_WISHLISTS = 'RECEIVE_WISHLISTS';

export const receiveWishlists = lists => ({
  type: RECEIVE_WISHLISTS,
  lists
});

export const fetchWishlists = () => dispatch => (
  APIUtil.fetchWishlists().then(lists => (
    dispatch(receiveWishlists(lists))
  ))
);