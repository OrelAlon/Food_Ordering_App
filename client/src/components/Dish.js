import React from 'react';
import '../css/dish.css';

const Dish = (props) => {
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
            <button>-</button>0<button>+</button>
          </div>
        </div>
        <div className='container'>
          <button className='animated-word'>Add To Cart</button>
        </div>
      </div>
      <div className='margin-food-box'></div>
    </div>
  );
};

export default Dish;
