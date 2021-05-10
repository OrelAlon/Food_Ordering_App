import React from 'react';
// import axios from 'axios'
import Orders from '../orders/Orders';
import '../../css/home.css';

const Home = () => {
  return (
    <div classNameName='sign-in-page'>
      <div id='bg'></div>

      <form action=''>
        <label for=''></label>
        <input
          type='text'
          name=''
          id=''
          placeholder='email'
          className='email'
        ></input>

        <label for=''></label>
        <input
          type='password'
          name=''
          id=''
          placeholder='password'
          className='pass'
        ></input>

        <button className='login-btn' type='submit'>
          login{' '}
        </button>
      </form>
    </div>
  );
};

export default Home;
