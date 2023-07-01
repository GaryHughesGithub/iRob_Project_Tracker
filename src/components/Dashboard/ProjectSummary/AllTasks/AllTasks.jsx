import React from 'react';
import './AllTasks.scss';

import Chevron from '../../../../assets/Dashboard/Chevron.svg';

export default function AllTasks() {
  return (
    <main className='allTasks'>
      <header className='allTasks__header'>
        <h4 className='allTasks__header--header'>Project Summary</h4>

        <div className='allTasks__header--buttons'>
          <ul>
            <li>Project</li>
            <li>
              <img src={Chevron} />
            </li>
          </ul>

          <ul>
            <li>Project Manager</li>
            <li>
              <img src={Chevron} />
            </li>
          </ul>

          <ul>
            <li>Status</li>
            <li>
              <img src={Chevron} />
            </li>
          </ul>
        </div>
      </header>

      <section className='allTasks__tasks'>
        <div className='allTasks__tasks--header'>
          <h4>Name</h4>
          <div className='rBlock'>
            <h4>Project manager</h4>
            <h4>Due date</h4>
            <h4>Status</h4>
            <h4>Progress</h4>
          </div>
        </div>
        <section>
          <div className='allTasks__tasks--info'>
            <p>Redux Project</p>
            <p>A. Jason</p>
            <p>12 Sept</p>
            <p>In progress</p>
            <p>65%</p>
          </div>
          <div className='allTasks__tasks--info'>
            <p>React Project</p>
            <p>B. Smith</p>
            <p>27 Jun</p>
            <p>Started</p>
            <p>99%</p>
          </div>
          <div className='allTasks__tasks--info'>
            <p>Strapi Project</p>
            <p>E. Wattson</p>
            <p>09 Dec</p>
            <p>Delayed</p>
            <p>43%</p>
          </div>
          <div className='allTasks__tasks--info'>
            <p>JavaScript Project</p>
            <p>S. Craig</p>
            <p>25 Mar</p>
            <p>Started</p>
            <p>87%</p>
          </div>
          <div className='allTasks__tasks--info'>
            <p>iRob Project</p>
            <p>K. Zazoo</p>
            <p>14 Febr</p>
            <p>Completed</p>
            <p>100%</p>
          </div>
        </section>
      </section>
    </main>
  );
}
