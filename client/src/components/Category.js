import React from 'react';
import '../css/category.css';

const Category = (props) => {
  const { category } = props;
  return (
    <div className='category-box'>
      <div>{category}</div>
    </div>
  );
};

export default Category;
