export const fetchWishlists = data => (
  $.ajax({
    method: 'GET',
    url: '/api/wishlists',
    data
  })
);

export const fetchWishlist = id => (
  $.ajax({
    method: 'GET',
    url: `api/wishlists/${id}`
  })
);

