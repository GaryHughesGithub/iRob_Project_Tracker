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
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
          <input type='number' maxLength={1} placeholder='_' pattern='[0-9]' />
        </div>

        <button>Confirm</button>
      </form>
    </div>
  );
}
