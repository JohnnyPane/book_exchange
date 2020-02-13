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

export const createWishlist = data => (
  $.ajax({
  method: "POST",
  url: "/api/wishlists",
  data: data 
  })
);

// add destroy and update
