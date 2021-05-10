import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dish from '../Dish';
import Category from '../Category';
const Dishes = (props) => {
  const [dishes, setDishes] = useState([]);
  const [category, setCategory] = useState([]);

  const getDishes = async () => {
    const dishes = await axios.get('http://localhost:5000/api/dishes');
    console.log(dishes);
    setDishes(dishes.data);
  };
  const getCategory = async () => {
    const category = await axios.get('http://localhost:5000/api/category');
    console.log(category);
    setCategory(category.data);
  };
  useEffect(() => {
    getDishes();
    getCategory();
  }, []);

  const { dish } = props;
  return (
    <div className='dishes-page'>
      <div className='category-container '>
        {category.map((item) => (
          <Category className='' key={item} category={item} />
        ))}{' '}
      </div>
      <div className='food-container '>
        {dishes.map((item) => (
          <Dish key={item.name} dish={item} />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
