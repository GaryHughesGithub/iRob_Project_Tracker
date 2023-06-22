import React from 'react';
import './Dashboard.scss';

import Chevron from '../../assets/Dashboard/Chevron.svg';
import ProfilePic from '../../assets/Dashboard/Profile.svg';
import Circle from '../../assets/Dashboard/Circle.svg';

export default function Dashboard() {
  return (
    <header className='dashboard'>
      <header className='dashboard__header'>
        <h1>Dashboard</h1>

        <div className='dashboard__header--Rblock'>
          <input type='text' placeholder='Search for anything ...' />
          <img src={Circle} className='circle' />

          <div className='profile'>
            <img src={ProfilePic} />

            <ul>
              <li>
                <h3>Alex McLane</h3>
              </li>
              <li>Product manager</li>
            </ul>

            <img src={Chevron} className='chevron' />
          </div>
        </div>
      </header>
    </header>
  );
}
