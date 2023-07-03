import React from 'react';
import './ProjectSummary.scss';

import AllTasks from './AllTasks/AllTasks';
import TodayTask from './TodayTask/TodayTask';
import Progress from './Progress/Progress';
import Workload from './Workload/Workload';

export default function ProjectSummary() {
  return (
    <main className='dashboardFlex'>
      <div className='L-Block'>
        <AllTasks />
        {/* <TodayTask /> */}
      </div>

      <div className='R-Block'>
        <Progress />
        <Workload />
      </div>
    </main>
  );
}
