export const fetchBooks = data => (
  $.ajax({
    method: 'GET',
    url: '/api/books',
    data
  })
);