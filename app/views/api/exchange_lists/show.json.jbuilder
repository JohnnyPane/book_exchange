json.exchangeList do
  json.partial! '/api/exchange_lists/exchange_list', exchangeList: @exchangeList
  json.bookIds @exchangeList.books.pluck(:id)
end

@exchangeList.books.each do |book|
  json.books do 
    json.set! book.id do 
      json.partial! 'api/books/book', book: book
    end
  end
end