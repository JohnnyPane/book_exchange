json.wishList do
  json.partial! '/api/wish_lists/wish_list', wishList: @wishList
end