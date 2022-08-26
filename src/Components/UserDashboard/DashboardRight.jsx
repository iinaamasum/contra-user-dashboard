import React from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DashboardRight = () => {
  const userExpNav = [
    { id: 1, path: '/work-experience', title: 'Work Experience' },
    { id: 2, path: '/calender', title: 'Calender' },
    { id: 3, path: '/my-feed', title: 'My Feed' },
  ];
  return (
    <div className="w-[750px] py-[30px] mt-[70px] flex justify-center rounded-2xl">
      <div className="">
        <span
          style={{
            lineHeight: '4rem',
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Web Service Provider at Affordable Price
        </span>
        {/* user exp nav  */}
        <div className="">
          {userExpNav.map((item) => (
            <Link className="mr-3" to={item.id} key={item.id}>
              <span className="text-2xl text-[#f2c94c]">•</span>
              {item.title}
            </Link>
          ))}
        </div>
        {/* service alert */}
        <div className="w-full">
          <p
            style={{
              background: '#fff',
              boxShadow: 'rgb(228 232 247 / 40%) 0px 0px 80px',
            }}
            className="py-[14px] w-full rounded-2xl bg-white inline-flex items-center gap-x-3 px-3 text-textColor_1"
          >
            <AiOutlineEyeInvisible size={28} />
            Your projects and services will go live once you complete your
            profile setup checklist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
