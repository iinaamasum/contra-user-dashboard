import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import userImg from '../../Assets/logo/user.png';

const DashboardLeft = () => {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.43)',
        boxShadow: 'rgb(228 232 247 / 40%) 0px 0px 80px',
      }}
      className="w-[515px] px-[32px] py-[92px] mt-[40px] flex items-center justify-center"
    >
      <div className="w-[364px] flex flex-col items-center justify-center">
        <div className="w-[210px] h-[210px] rounded-full bg-black">
          <img className="h-full w-full object-fill" src={userImg} alt="" />
        </div>
        <div className="hover:bg-primaryWhite w-full py-3 flex items-center justify-center rounded-lg mt-2">
          <h2 className="name__text__gradient">Md. Masum Mia</h2>
          <BiBadgeCheck size={30} className="ml-1 text-gray-400" />
        </div>
        <div className="mt-1">
          <button className="bd-white py-3 px-8 rounded-full border-[2px] border-[#f2c94c] text-base font-semibold hover:bg-primaryWhite">
            Verify Your Identity
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
