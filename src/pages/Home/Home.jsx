import React from 'react';
import Menu from '../../components/Menu/Menu';
import Dashboard from '../../components/Dashboard/Dashboard';

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Menu />
      <Dashboard />
    </div>
  );
}
