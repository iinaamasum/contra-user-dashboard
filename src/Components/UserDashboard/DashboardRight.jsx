import React from 'react';
import { NavLink } from 'react-router-dom';
import pro1 from '../../Assets/image/pro1.jpeg';
import pro2 from '../../Assets/image/pro2.jpeg';
import pro3 from '../../Assets/image/pro3.jpeg';
import pro4 from '../../Assets/image/pro4.jpeg';
import pro5 from '../../Assets/image/pro5.jpeg';
import UserProjectsCard from './UserProjectsCard';

const DashboardRight = () => {
  const userExpNav = [
    { id: 1, path: '/', title: 'Work Experience' },
    { id: 2, path: '/calender', title: 'Calender' },
    { id: 3, path: '/my-feed', title: 'My Feed' },
  ];

  const projectsCardData = [
    {
      id: 1,
      title: 'WWF My Footprint App UX',
      description:
        'How might we make it a cultural norm to reduce your impact on nature?',
      img: `${pro1}`,
    },
    {
      id: 2,
      title: 'M&S sees 100k app downloads after launching Advent',
      description:
        'The calendar features prizes such as a meet and greet with Gary Barlow',
      img: `${pro2}`,
    },
    {
      id: 3,
      title: 'Land Rover Explore',
      description:
        'What if we could support the launch of a new category of phone?',
      img: `${pro3}`,
    },
    {
      id: 4,
      title: 'We Find Venues’ bookings hit £7.5m after product design',
      description: 'What if you could make finding event space better?',
      img: `${pro4}`,
    },
    {
      id: 5,
      title: 'Improving Design Sprints with Data',
      description:
        'How might we make it a cultural norm to reduce your impact on nature?',
      img: `${pro5}`,
    },
  ];
  return (
    <div className="w-full lg:w-[640px] lg1300:w-[750px] px-4 md:px-0 py-[30px] mt-[40px] flex justify-center rounded-2xl">
      <div className="">
        <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-bold leading-[2rem] md:leading-[4rem]">
          Web Service Provider at Affordable Price
        </h2>
        {/* user exp nav  */}
        <div className="my-5">
          <ul className="flex items-center border-b-2 border-white">
            {userExpNav.map((link) => (
              <li
                key={link.id}
                className="mr-2 xsm:mr-3 text-base md:text-lg font-medium py-2"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 border-black py-[12px]' : ''
                  }
                  to={link.path}
                >
                  <span className="text-2xl text-[#f2c94c] mr-1">•</span>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* projects card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-5">
          {projectsCardData.map((data) => (
            <UserProjectsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
