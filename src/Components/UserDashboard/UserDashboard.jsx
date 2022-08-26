import React from 'react';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';

const UserDashboard = () => {
  return (
    <div className="flex justify-center gap-x-[72px] bg-primaryWhite">
      <DashboardLeft />
      <DashboardRight />
    </div>
  );
};

export default UserDashboard;
