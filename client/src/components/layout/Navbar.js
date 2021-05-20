import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar'>
      <h1>
        {title} <i className={icon} />
      </h1>
      <ul>
        <Link to='/'>
          <li>Login</li>{' '}
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Hanamal - 24',
  icon: 'fas fa-utensils',
};

export default Navbar;
