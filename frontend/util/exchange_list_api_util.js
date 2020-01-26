export const fetchExchangeLists = data =>
  $.ajax({
    method: "GET",
    url: "/api/exchange_lists",
    data
  });

export const fetchExchangeList = id =>
  $.ajax({
    method: "GET",
    url: `api/exchange_lists/${id}`
  });
