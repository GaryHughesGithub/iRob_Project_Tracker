import React from 'react';
import './Authentication.scss';

import Logo from '../../assets/Logo.svg';

export default function Authentication() {
  return (
    <section className='auth'>
      <div className='auth__form'>
        <img src={Logo} />

        <div className='auth__form--header'>
          <h1>Log in to Your Account</h1>
          <h4>Don't have an account? Sign up</h4>
          <ul />
        </div>

        <form className='auth__form--submit'>
          <div className='userField'>
            <h3>Email Address</h3>
            <input type='text' placeholder='company@email.com' />
          </div>

          <div className='userField'>
            <h3>Password</h3>
            <input type='text' placeholder='*****' />
          </div>

          <div className='passwordReset'>
            <ul>
              <li>
                <input type='checkbox' />
              </li>
              <li>Remember me</li>
            </ul>

            <h5>Forgot Password?</h5>
          </div>

          <button>Login</button>
        </form>
      </div>
    </section>
  );
}
