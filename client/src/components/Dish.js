import React, { useState, useContext } from 'react';
// import OrderState from '../context/order/OrderState';
import orderContext from '../context/order/orderContext';
import '../css/dish.css';
import * as TYPES from '../context/types';

const Dish = (props) => {
  const [mealCount, setMealCount] = useState(1);
  const context = useContext(orderContext);

  const plusCount = () => {
    setMealCount((prevCount) => prevCount + 1);
  };
  const minusCount = () => {
    if (mealCount > 1) {
      setMealCount((prevCount) => prevCount - 1);
    }
  };
  const addToCart = () => {
    context.dispatch({ type: TYPES.ADD_ORDER, payload: { dish, mealCount } });
  };
  const { dish } = props;

  return (
    <div className='center' id={dish.category}>
      <div className='card'>
        <div className='additional'>
          <div className='user-card'>
            <img
              src={dish.imageUrl}
              role='img'
              aria-labelledby='title desc'
              className='center'
            ></img>
          </div>
        </div>
        <div className='general'>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <button onClick={addToCart} className='more add-btn'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dish;
