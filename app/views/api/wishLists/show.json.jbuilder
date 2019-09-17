json.wishlist do
  json.partial! '/api/wishlists/wishlist', wishlist: @wishlist
end