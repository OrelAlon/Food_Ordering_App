import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/payment.css';
import orderContext from '../../context/order/orderContext';

const Payment = () => {
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
    <div className='payment-page'>
      <div className='payment-card'>
        <div className='center-card'>
          <h3>Your Order:</h3>
          <div className='client-order'>
            {orders.map((item, index) => {
              return (
                <div key={index}>
                  {/* <div className='product_img'>
                  <img src={item.dish.imageUrl} alt='' />
                </div> */}
                  <div className='product_info order_price'>
                    <p>
                      {'    '}
                      {item.mealCount} X {item.dish.name}{' '}
                    </p>
                    <span>$ {item.dish.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='client-price'>
            <div className='order_price'>
              <p>Order summary</p>
              <h4>${sumOrderClient}</h4>
            </div>

            <div className='order_price'>
              <p>Delivery</p>
              <h4>$10</h4>
            </div>
            <div className='order_price'>
              <p>Total Amount</p>
              <h4>${sumOrderClient + 10}</h4>{' '}
            </div>
          </div>
          <label className='input-text' htmlFor=''>
            Delivery Address:
          </label>
          <input className='input-address' type='text' name='' id='' />
          <div className='send-btn'>
            <Link to='/ordersent'>
              <button>Send My Food</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
