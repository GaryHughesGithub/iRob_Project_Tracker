import React from 'react';
import './EmailCode.scss';

export default function EmailCode() {
  return (
    <div className='emailCode'>
      <form className='emailCode__form'>
        <p>
          Thank you very much! We have now sent a 6 digit code to the chosen
          email. Please enter it below in order to reset your password
        </p>

        <div className='emailCode__form--digits'>
          <input type='text' maxLength={1} placeholder='_' />
          <input type='text' maxLength={1} placeholder='_' />
          <input type='text' maxLength={1} placeholder='_' />
          <input type='text' maxLength={1} placeholder='_' />
          <input type='text' maxLength={1} placeholder='_' />
          <input type='text' maxLength={1} placeholder='_' />
        </div>

        <button>Confirm</button>
      </form>
    </div>
  );
}
