import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../../sherd/serverApi';
import '../../css/login.css';
import swal from 'sweetalert';

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState('orel');
  const [user, setUser] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    password2: '',
  });
  const history = useHistory();

  const { name, phone, address, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSignUp = () => {
    console.log('sign up btn');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.password2) {
      return swal({
        text: 'The passwords must be the same!',
      });
    }

    const response = await signup(user);
    if (response.errors && response.errors.length > 0) {
      setErrorMsg(response.errors[0].msg);
      return;
    }
    history.push('/dishes');
  };

  return (
    <div className='sign-in-page'>
      <div id='bg'></div>

      <form onSubmit={onSubmit}>
        <p>{errorMsg}</p>
        <label htmlFor=''></label>
        <input
          type='text'
          name='name'
          placeholder='name'
          className='name'
          value={name}
          onChange={onChange}
        ></input>
        <label htmlFor=''></label>
        <input
          type='text'
          name='phone'
          placeholder='phone'
          className='phone'
          value={phone}
          onChange={onChange}
        ></input>

        <label htmlFor=''></label>
        <input
          type='text'
          name='email'
          placeholder='email'
          className='email'
          value={email}
          onChange={onChange}
        ></input>
        <label htmlFor=''></label>
        <input
          type='password'
          name='password'
          placeholder='password'
          className='password'
          value={password}
          onChange={onChange}
        ></input>
        <label htmlFor=''></label>
        <input
          type='password'
          name='password2'
          placeholder='confirm password'
          className='password2'
          value={password2}
          onChange={onChange}
        ></input>
        <br />
        <button className='signup-btn' onClick={handleSignUp}>
          sign up{' '}
        </button>
      </form>
    </div>
  );
};

export default Signup;
