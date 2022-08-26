import React from 'react';
import pro1 from '../../Assets/image/pro1.jpeg';

const UserProjectsCard = () => {
  return (
    <div className="lg1200:flex items-start justify-between p-[30px] bg-[#fff] my-[30px] rounded-2xl gap-x-[20px]">
      <div className="h-[190px] w-full lg1200:w-[250px]">
        <img className="h-full w-full rounded-xl" src={pro1} alt="" />
      </div>
      <div className="">
        <h2
          style={{
            lineHeight: '2.5rem',
          }}
          className="text-2xl lg1200:text-4xl font-bold mb-3"
        >
          WWF My Footprint App UX
        </h2>
        <p>
          How might we make it a cultural norm to reduce your impact on nature?
        </p>
      </div>
    </div>
  );
};

export default UserProjectsCard;
