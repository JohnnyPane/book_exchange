import * as APIUtil from '../util/match_list_api_util'

export const RECEIVE_MATCH_LIST = "RECEIVE_MATCH_LIST";

export const receiveMatchList = list => ({
  type: RECEIVE_MATCH_LIST,
  list
});

export const fetchMatchList = () => dispatch => (
  APIUtil.fetchMatchLists().then(list => (
    dispatch(receiveMatchList(list))
  ))
);