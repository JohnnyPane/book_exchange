export const fetchMatchLists = data => {
  return $.ajax({
    method: "GET",
    url: "/api/match_lists",
    data
  });
};
