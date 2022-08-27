import React from 'react';

const UserProjectsCard = ({ data }) => {
  const { title, description, img } = data;

  return (
    <div className="w-full xsm:w-[320px] lg1200:w-full lg1200:flex items-start justify-between p-[15px] lg1200:p-[30px] bg-[#fff] rounded-2xl gap-x-[20px]">
      <div className="h-[250] xsm:h-[190px] w-full lg1200:w-[250px]">
        <img className="h-full w-full rounded-xl" src={img} alt="" />
      </div>
      <div className="w-full lg1200:w-[415px] mt-3 lg1200:mt-0">
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
