export const GET_ORDERS = 'GET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const FILTER_ORDERS = 'FILTER_ORDERS';
export const CLEAR_ORDERS = 'CLEAR_ORDERS';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const ORDER_ERROR = 'ORDER_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const deleteOrder = (orderId) => {
  return { type: DELETE_ORDER, payload: orderId };
};

export const loginClear = () => {
  return { type: LOGIN_SUCCESS };
};
