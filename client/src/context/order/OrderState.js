import React, { useReducer } from 'react';
import uuid from 'uuid';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';
import {
  ADD_ORDER,
  DELETE_ORDER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ORDER,
  FILTER_ORDERS,
} from '../types';

const OrderState = (props) => {
  const initialState = {
    orders: [],
  };
  const [state, dispatch] = useReducer(orderReducer, initialState); //
  // Add Order

  // Delete Order

  // Update Order

  // Set current Order

  // Clear current Order

  // Filter Order

  // Clear Order

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        dispatch,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
