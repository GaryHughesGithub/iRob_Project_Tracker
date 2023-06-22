import React from 'react';
import './NewPassword.scss';

export default function NewPassword() {
  return (
    <div className='newPassword'>
      <form className='newPassword__form'>
        <p>
          Thank you! Your code has been accepted. Please proceed forward by
          creating and confirming your new password
        </p>

        <div className='newPassword__form--newPass'>
          <h3>New Password</h3>
          <input type='password' placeholder='*****' />
        </div>

        <div className='newPassword__form--confirm'>
          <h3>Confirm New Password</h3>
          <input type='password' placeholder='*****' />
        </div>

        <ul className='newPassword__form--showPass'>
          <li>
            <input type='checkbox' />
          </li>

          <li>Show Password</li>
        </ul>

        <button>Reset Password</button>
      </form>
    </div>
  );
}
