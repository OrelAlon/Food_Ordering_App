import React, { Fragment, useContext } from 'react';
import OrderContext from '../../context/order/orderContext';
const Orders = () => {
  const orderContext = useContext(OrderContext);

  const { orders } = orderContext;

  return (
    <Fragment>
      {orders.map((item) => (
        <h3>{item.name}</h3>
      ))}
    </Fragment>
  );
};

export default Orders;
