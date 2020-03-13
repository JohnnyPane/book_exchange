import merge from "lodash/merge";

import {
  RECEIVE_MATCH_LIST
} from "../actions/match_list_actions";

const matchListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MATCH_LIST:
      return action.list;
    default:
      return state;
  }
};

export default matchListsReducer;
