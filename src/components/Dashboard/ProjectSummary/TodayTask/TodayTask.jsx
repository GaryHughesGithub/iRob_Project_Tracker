import React from 'react';
import './TodayTask.scss';

export default function TodayTask() {
  return (
    <section className='todayTask'>
      <h3>Today task</h3>

      <div className='todayTask__nav'>
        <ul className='unselected'>
          <li>All</li>
          <li>10</li>
        </ul>

        <ul className='selected'>
          <li>Important</li>
          <li></li>
        </ul>

        <ul className='unselected'>
          <li>Notes</li>
          <li>05</li>
        </ul>

        <ul className='unselected'>
          <li>Links</li>
          <li>12</li>
        </ul>
      </div>

      <section className='todayTask__tasks'>
        <div className='taskRow-approved'>
          <input type='checkbox' />
          <label>Speak to the manager about the Strapi Project</label>
          <span className='approved'> Approved</span>
        </div>
        <div className='taskRow-inReview'>
          <input type='checkbox' />
          <label>Set up a meeting with Dan to discuss Strapi Project</label>
          <span className='approved'> In review</span>
        </div>
        <div className='taskRow-approved'>
          <input type='checkbox' />
          <label>Speak to the manager about the Strapi Project</label>
          <span className='approved'> Approved</span>
        </div>
        <div className='taskRow-inReview'>
          <input type='checkbox' />
          <label>Set up a meeting with Dan to discuss Strapi Project</label>
          <span className='approved'> In review</span>
        </div>
      </section>
    </section>
  );
}
