import React, { useContext } from 'react';
import '../css/cart.css';
import orderContext from '../context/order/orderContext';
import { deleteOrder } from '../context/types';
import * as TYPES from '../context/types';

const OneItemCart = () => {
  const { orders, dispatch } = useContext(orderContext);

  const onDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const onAddItem = (dish) => {
    dispatch({
      type: TYPES.ADD_ORDER,
      payload: { dish, mealCount: 1 },
    });
  };
  const onRemoveItem = (dish) => {
    dispatch({
      type: TYPES.ADD_ORDER,
      payload: { dish, mealCount: -1 },
    });
  };
  return (
    <div>
      <div>
        {orders.map((item, index) => {
          return (
            <div key={index} className='card_item'>
              <div className='product_img'>
                <img src={item.dish.imageUrl} alt='' />
              </div>
              <div className='product_info'>
                <div> {item.dish.name}</div>
                <div>$ {item.dish.price}</div>
                {/* <p>{item.dish.description}</p> */}
                <div className='close-btn'>
                  <i
                    className='fa fa-times'
                    onClick={() => onDeleteOrder(item.dish.id)}
                  ></i>
                </div>
                <div className='product_rate_info'>
                  <span
                    className='count-minus'
                    onClick={() => onRemoveItem(item.dish)}
                  >
                    -
                  </span>
                  <span className='count'> {item.mealCount}</span>
                  <span
                    className='count-plus'
                    onClick={() => onAddItem(item.dish)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OneItemCart;
