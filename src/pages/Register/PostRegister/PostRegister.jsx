import React from 'react';
import './PostRegister.scss';

export default function PostRegister() {
  return (
    <div className='postRegister'>
      <form>
        <p>
          Hello John Smith, you are all set up to go. In order to login please
          click on the button below.
        </p>
        <button>Login</button>
      </form>
    </div>
  );
}
