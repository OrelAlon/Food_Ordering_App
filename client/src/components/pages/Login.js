import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../sherd/serverApi';
import AlertContext from '../../context/alert/alertContext';
import '../../css/login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onLogin = async (e) => {
    e.preventDefault();

    const response = await login(user);
    localStorage.setItem('token', JSON.stringify(response.data));

    history.push('/dishes');
  };
  return (
    <div className='login-page'>
      <div id='bg'></div>

      <form onSubmit={onLogin}>
        <label htmlFor=''></label>
        <input
          type='text'
          name='email'
          id=''
          placeholder='email'
          className='email'
          value={email}
          onChange={onChange}
        ></input>
        <label htmlFor=''></label>
        <input
          type='password'
          name='password'
          id=''
          placeholder='password'
          className='pass'
          value={password}
          onChange={onChange}
        ></input>
        <button className='login-btn' type='submit' onClick={onLogin}>
          login{' '}
        </button>{' '}
        <br />
        <br />
        <br />
        <p>First time here? </p>
        <Link to='/signup'>
          <button className='signup-btn'>sign up </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
