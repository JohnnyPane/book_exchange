export const asArray = ({ books }) => (
  Object.keys(books).map(key => books[key])
);

export const selectWishlist = ({ wishlists }, wishlistId) => {
  return wishlists[wishlistId] || { bookIds: [] };
};

export const selectBooksForList = ({ wishlists, books}, wishlist) => {
  return wishlist.bookIds.map(bookId => books[bookId]);
}