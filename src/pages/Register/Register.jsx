import React from 'react';
import './Register.scss';

export default function Register() {
  return (
    <section className='signUp'>
      <form className='signUp__form'>
        <div className='signUp__form--Name'>
          <h3>Fist name</h3>
          <input type='text' placeholder='John' />
        </div>

        <div className='signUp__form--LastName'>
          <h3>Last name</h3>
          <input type='text' placeholder='Smith' />
        </div>

        <div className='signUp__form--Email'>
          <h3>Email address</h3>
          <input type='text' placeholder='JohnSmith@email.com' />
        </div>

        <div className='signUp__form--Password'>
          <h3>Password</h3>
          <input type='text' placeholder='*****' />
        </div>

        <div className='signUp__form--ConfirmPassword'>
          <h3>Confirm password</h3>
          <input type='text' placeholder='*****' />
        </div>

        <button>Sign up</button>
      </form>
    </section>
  );
}
