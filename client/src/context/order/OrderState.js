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
    orders: [
      {
        name: 'Meat',
        description: 'Amazing steak with egg on top',
        price: 499,
        imageUrl:
          'https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12-788x1182.jpg',
      },
      {
        name: 'tost',
        description: 'Amazing tost with egg on top',
        price: 30,
        imageUrl:
          'https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12-788x1182.jpg',
      },
    ],
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
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
