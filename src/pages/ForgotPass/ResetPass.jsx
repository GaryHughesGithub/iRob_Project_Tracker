import React from 'react';
import './ResetPass.scss';

export default function ResetPass() {
  return (
    <div className='resetPassword'>
      <form className='resetPassword__form'>
        <p>
          In order for us to find you, please enter your email address below
        </p>
        <div className='resetViaEmail'>
          <h3>Email adress</h3>
          <input type='text' placeholder='member_company@email.com' />
        </div>

        <button>Reset Password</button>
      </form>
    </div>
  );
}
