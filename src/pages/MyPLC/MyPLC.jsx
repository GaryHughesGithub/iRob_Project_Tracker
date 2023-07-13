import React from 'react';
import './MyPLC.scss';
import Menu from '../../components/Menu/Menu';
import MyTable from '../../components/MyTable/MyTable';

export default function MyPLC() {
  return (
    <section className='myPLC'>
      <Menu />
      <MyTable />
    </section>
  );
}
