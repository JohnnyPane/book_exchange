export const bookSearch = input => (
  $.ajax({
    type: 'GET',
    url: "https://www.googleapis.com/books/v1/volumes?q=" + input,
    dataType: 'json',
  })
);

export const bestSellersList = input => (
  $.ajax({
    type: 'GET',
    url: "https://api.nytimes.com/svc/books/v3/lists.json?list-name=" + input + "&api-key=bzVnxaTV8wb9KONOPTAkEv5dQWRovZmZ",
    dataType: 'json',
  })
);