import {
  RECEIVE_EXCHANGE_LISTS,
  RECEIVE_EXCHANGE_LIST
} from "../actions/exchange_list_actions";

const exchangeListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EXCHANGE_LISTS:
      return action.lists;
    case RECEIVE_EXCHANGE_LIST:
      const newList = { [action.list.id]: action.list };
      return Object.assign({}, state, newList);
    default:
      return state;
  }
};

export default exchangeListsReducer;
