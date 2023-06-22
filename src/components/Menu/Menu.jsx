import React from 'react';
import './Menu.scss';

import Logo from '../../assets/Login/Logo.svg';
import Dashboard from '../../assets/Dashboard/Dashboard.svg';
import Projects from '../../assets/Dashboard/Projects.svg';
import Tasks from '../../assets/Dashboard/Tasks.svg';

export default function Menu() {
  return (
    <div className='sidebar'>
      <img src={Logo} className='sidebar__logo' />

      <div className='sidebar__menu'>
        <ul className='selected'>
          <li>
            <img src={Dashboard} />
          </li>
          <li>Dashboard</li>
        </ul>

        <ul className='unselected'>
          <li>
            <img src={Projects} />
          </li>
          <li>My PLC List</li>
        </ul>

        <ul className='unselected'>
          <li>
            <img src={Tasks} />
          </li>
          <li>All PLC List</li>
        </ul>
      </div>

      <button className='sidebar__logOut'>Log out</button>
    </div>
  );
}
