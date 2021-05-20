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
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user);

      if (response.msg) {
        setErrorMsg(response.msg);

        return;
      }
      localStorage.setItem('token', JSON.stringify(response.data));
      history.push('/dishes');
    } catch (e) {
      console.log(e);
    }
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
        <p className='error-msg'>{errorMsg}</p>
        <br />
        <br />
        <br />
        <p className='text'>
          First Time Here?<i className='fas fa-arrow-down'></i>
        </p>
        <Link to='/signup'>
          <button className='signup-btn'>sign up </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
