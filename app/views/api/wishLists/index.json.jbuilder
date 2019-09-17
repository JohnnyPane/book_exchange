@wishlists.each do |wishlist|
  json.set! wishlist.id do
    json.partial! 'wishlist', wishlist: wishlist
  end
end