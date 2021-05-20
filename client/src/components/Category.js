import React from 'react';
import '../css/category.css';
import { Link } from 'react-router-dom';

const Category = (props) => {
  const { category } = props;
  return (
    <a className='category-box' href={`#${category}`}>
      <ul>
        <li>
          {category}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </a>
  );
};

export default Category;
