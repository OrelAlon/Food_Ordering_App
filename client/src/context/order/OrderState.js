import React, { useReducer } from 'react';
import OrderContext from './orderContext';
import orderReducer, { loadOrder } from './orderReducer';

const OrderState = (props) => {
  const initialState = {
    orders: loadOrder(),
  };
  const [state, dispatch] = useReducer(orderReducer, initialState); //

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
