import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

const UserDashboard = () => {
  return (
    <div className="bg-primaryWhite min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-x-[72px]">
        <DashboardLeft />
        <DashboardRight />
      </div>
    </div>
  );
};

export default UserDashboard;
