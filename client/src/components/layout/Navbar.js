import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar'>
      <h1>
        {title} <i className={icon} />
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>{' '}
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Hanamal - 24',
  icon: 'fas fa-utensils',
};

export default Navbar;
