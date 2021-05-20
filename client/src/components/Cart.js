import React, { useContext, useEffect, useState } from 'react';
import '../css/cart.css';
import { Link } from 'react-router-dom';
import orderContext from '../context/order/orderContext';
import OneItemCart from './OneItemCart';
const Cart = () => {
  const { orders, dispatch } = useContext(orderContext);
  const [sumOrderClient, setSumOrderClient] = useState('');
  useEffect(() => {
    sumOrder();
  }, [orders]);
  const sumOrder = () => {
    if (orders.length > 0) {
      setSumOrderClient(
        orders.reduce(
          (accumalator, item) => accumalator + item.dish.price * item.mealCount,
          0
        )
      );
    }
  };

  return (
    <div className='order_summary'>
      <div className='summary_card'>
        <div className='one-dish'>
          <OneItemCart />
        </div>
        <hr />
        <div className='order_price'>
          <p>Order summary</p>
          <h4>${sumOrderClient}</h4>
        </div>

        <div className='order_price'>
          <p>Delivery</p>
          <h4>$10</h4>
        </div>
        <div className='order_total'>
          <p>Total Amount</p>
          <h4>${sumOrderClient + 10}</h4>{' '}
        </div>
        <div className='center-btn'>
          <Link to='/payment'>
            <button className='pay-btn'>Procced to payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
