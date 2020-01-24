@wishlists.each do |wishlist|
  json.set! wishlist.id do
    json.partial! 'wishlist', wishlist: wishlist
    wishlist.books.each do |book|
      json.books do 
        json.set! book.id do 
          json.partial! 'api/books/book', book: book
        end
      end
    end
  end

  # json.wishlist do
  #   json.partial! '/api/wishlists/wishlist', wishlist: @wishlist
  #   json.bookIds wishlist.books.pluck(:id)
  # end


end

