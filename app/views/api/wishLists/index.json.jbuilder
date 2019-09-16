@wish_lists.each do |wish_list|
  json.set! wish_list.id do
    json.partial! 'wish_list', wish_list: wish_list
  end
end