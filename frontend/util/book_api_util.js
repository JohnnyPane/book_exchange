export const fetchBooks = data => (
  $.ajax({
    method: 'GET',
    url: '/api/books',
    data
  })
);

export const fetchBook = id => (
  $.ajax({
    method: 'GET',
    url: `api/books/${id}`
  })
);

export const createBook = book => (
  $.ajax({
    method: 'POST',
    url: '/api/books',
    data: book
  })
);