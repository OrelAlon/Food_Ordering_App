import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar'>
      <h1>
        {title} <i className={icon} />
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Hanamal - 24',
  icon: 'fas fa-utensils',
};

export default Navbar;
