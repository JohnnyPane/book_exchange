export const asArray = ({ books }) => (
  Object.keys(books).map(key => books[key])
);

