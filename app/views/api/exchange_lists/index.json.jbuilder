@exchangeLists.each do |exchangeList|
  json.set! exchangeList.id do
    json.partial! 'exchangeList', exchangeList: exchangeList
    exchangeList.books.each do |book|
      json.books do 
        json.set! book.id do 
          json.partial! 'api/books/book', book: book
        end
      end
    end
  end
end
