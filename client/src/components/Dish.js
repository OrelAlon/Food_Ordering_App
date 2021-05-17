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
    <div>
      <div className='info-box info-box-horizontal info-box-bordered'>
        <img className='food-img' src={dish.imageUrl} alt=''></img>
        <div className='info-box-content'>
          <div className='info-box-title'>
            <p>{dish.name}</p>
            <p className='food-price'>{dish.price}$</p>
          </div>
          <p>{dish.description}</p>
          {/* <div className='food-count'>
            <button onClick={minusCount}>-</button>
            {mealCount}
            <button onClick={plusCount}>+</button>
          </div> */}
        </div>
        <div className='container'>
          <button className='add-to-cart-btn' onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
      <div className='margin-food-box'></div>
    </div>
  );
};

export default Dish;
