import React from 'react';
import Layout from '../../components/Admin/Layout';
import Progress from '../../components/Homepage/Progress';
import Summary from '../../components/Homepage/Summary';
import Workload from '../../components/Homepage/Workload';

export default function Home() {
  return (
    <Layout>
      <div className='flex gap-20 justify-center'>
        <Progress />
        <Workload />
      </div>

      <Summary />
    </Layout>
  );
}
