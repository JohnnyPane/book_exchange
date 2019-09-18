export const fetchWishlists = data => (
  $.ajax({
    method: 'GET',
    url: '/api/wishlists',
    data
  })
);