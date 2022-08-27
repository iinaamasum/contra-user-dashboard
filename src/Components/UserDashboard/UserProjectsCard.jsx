import React from 'react';

const UserProjectsCard = ({ data }) => {
  const { title, description, img } = data;

  return (
    <div className="lg1200:flex items-start justify-between p-[30px] bg-[#fff] my-[30px] rounded-2xl gap-x-[20px]">
      <div className="h-[190px] w-full lg1200:w-[250px]">
        <img className="h-full w-full rounded-xl" src={img} alt="" />
      </div>
      <div className="w-full lg1200:w-[415px]">
        <h2
          style={{
            lineHeight: '2.5rem',
          }}
          className="text-2xl lg1200:text-4xl font-bold mb-4"
        >
          {title.slice(0, 45)}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UserProjectsCard;
