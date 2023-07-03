import React from 'react';
import './Workload.scss';

import Chevron from '../../../../assets/Dashboard/Chevron.svg';

export default function Workload() {
  return (
    <main className='workload'>
      <div className='workload__header'>
        <h3>Workload</h3>
        <ul className='progress__header--Rblock'>
          <li>Last 3 Month</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>
      </div>

      <section className='workload__rewards'>
        <div>
          <section className='counters'>
            <div className='topCounter'>7</div>
            <div className='counter' />
            <div className='counter' />
          </section>
          <h5>John</h5>
        </div>

        <div>
          <section className='counters'>
            <div className='topCounter'>7</div>
            <div className='counter' />
            <div className='counter' />
          </section>
          <h5>John</h5>
        </div>

        <div>
          <section className='counters'>
            <div className='topCounter'>7</div>
            <div className='counter' />
            <div className='counter' />
          </section>
          <h5>John</h5>
        </div>

        <div>
          <section className='counters'>
            <div className='topCounter'>7</div>
            <div className='counter' />
            <div className='counter' />
          </section>
          <h5>John</h5>
        </div>

        <div>
          <section className='counters'>
            <div className='topCounter'>7</div>
            <div className='counter' />
            <div className='counter' />
          </section>
          <h5>John</h5>
        </div>
      </section>
    </main>
  );
}
