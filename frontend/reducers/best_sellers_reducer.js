import { NYT_BEST_SELLERS } from "../actions/book_actions";
import { bestSellersList } from "../util/google_book_api_search";

const bestSellersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case NYT_BEST_SELLERS:
      return action.books;
    default:
      return state;
  }
};

export default bestSellersReducer;
