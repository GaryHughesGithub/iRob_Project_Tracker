import React from 'react';
import './Progress.scss';

import Chevron from '../../../../assets/Dashboard/Chevron.svg';
import Meter from '../../../../assets/ProgressMeter(1).svg';

export default function Progress() {
  return (
    <main className='progress'>
      <div className='progress__header'>
        <h3>Overall Progress</h3>
        <ul className='progress__header--Rblock'>
          <li>All</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>
      </div>

      <div className='progress__meter'>
        <img src={Meter} />
      </div>

      <section>
        <div className='progress__projects'>
          <ul className='total'>
            <li>95</li>
            <li>Total projects</li>
          </ul>

          <ul className='completed'>
            <li>25</li>
            <li>Completed</li>
          </ul>

          <ul className='delayed'>
            <li>35</li>
            <li>Delayed</li>
          </ul>

          <ul className='onGoing'>
            <li>35</li>
            <li>On going</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
