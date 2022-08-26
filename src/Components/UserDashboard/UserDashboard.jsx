import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

const UserDashboard = () => {
  return (
    <div className="bg-primaryWhite min-h-screen">
      <div className="flex justify-center gap-x-[72px]">
        <DashboardLeft />
        <DashboardRight />
      </div>
    </div>
  );
};

export default UserDashboard;
