# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Wishlist.delete_all;
# ExchangeList.delete_all;
# Book.delete_all;

# Wishlist.create!(
#   title: 'Tolkien',
#   genre: 'Fantasy',
#   author_id: 1
# )

# Wishlist.create!(
#   title: 'Fiction',
#   genre: 'Crime',
#   author_id: 1
# )

# ExchangeList.create!(
#   author_id: 1
# )

# ExchangeList.create!(
#   author_id: 2
# )


Book.create!(
  title: 'Harry Potter and the Chamber of Secrets',
  authors: 'J.K. Rowling',
  description: 'A delightfully good book',
  imageURL: 'http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  author_id: 1,
  wishlist_id: 21,
  exchange_list_id: nil
)

Book.create!(
  title: 'The Hobbit, Or, There and Back Again',
  authors: 'J.R.R. Tolkien',
  description: "Best children's book of all time",
  imageURL: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  author_id: 1,
  wishlist_id: 22,
  exchange_list_id: nil
)

Book.create!(
  title: 'The Hobbit, Or, There and Back Again',
  authors: 'J.R.R. Tolkien',
  description: "Best children's book of all time",
  imageURL: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  author_id: 1,
  wishlist_id: nil,
  exchange_list_id: 20
)

Book.create!(
  title: 'Harry Potter and the Chamber of Secrets',
  authors: 'J.K. Rowling',
  description: 'A delightfully good book',
  imageURL: 'http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  author_id: 1,
  wishlist_id: nil,
  exchange_list_id: 21
)

