import * as APIUtil from "../util/exchange_list_api_util";

export const RECEIVE_EXCHANGE_LISTS = "RECEIVE_EXCHANGE_LISTS";
export const RECEIVE_EXCHANGE_LIST = "RECEIVE_EXCHANGE_LIST";

export const receiveExchangeLists = lists => ({
  type: RECEIVE_EXCHANGE_LISTS,
  lists
});

export const receiveExchangeList = ({ exchangeList, books }) => ({
  type: RECEIVE_EXCHANGE_LISTS,
  exchangeList,
  books
});

export const fetchExchangeLists = () => dispatch => (
  APIUtil.fetchExchangeLists().then(lists => (
    dispatch(receiveExchangeLists(lists))
  ))
);

export const fetchExchangeList = id => dispatch => ( 
  APIUtil.fetchExchangeList(id).then(list => (
    dispatch(receiveExchangeList(list))
  ))
);

export const createExchangeList = list => dispatch => (
  APIUtil.createExchangeList(list).then(list => (
    dispatch(receiveExchangeList(list))
  ))
);