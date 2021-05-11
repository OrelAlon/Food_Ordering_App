import React, { useState } from 'react';
import '../css/dish.css';

const Dish = (props) => {
  const [mealCount, setMealCount] = useState(0);
  // const [cartCount, setCartCount] = useState(0);

  const plusCount = () => {
    setMealCount((prevCount) => prevCount + 1);
  };
  const minusCount = () => {
    if (mealCount > 0) {
      setMealCount((prevCount) => prevCount - 1);
    }
  };
  const addToCart = () => {
    console.log(mealCount);
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
          <div className='food-count'>
            <button onClick={minusCount}>-</button>
            {mealCount}
            <button onClick={plusCount}>+</button>
          </div>
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
