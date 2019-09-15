export const bookSearch = input => (
  $.ajax({
    type: 'GET',
    url: "https://www.googleapis.com/books/v1/volumes?q=" + input,
    dataType: 'json',
  })
);

