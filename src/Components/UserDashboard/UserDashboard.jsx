import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

const UserDashboard = () => {
  return (
    <div
      style={{
        background: '#fff',
      }}
      className="flex justify-center gap-x-[72px]"
    >
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default UserDashboard;
