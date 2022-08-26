import React from 'react';
import pro1 from '../../Assets/image/pro1.jpeg';

const UserServiceCard = () => {
  return (
    <div>
      <div className="">
        <img src={pro1} alt="" />
      </div>
      <h2>WWF My Footprint App UX</h2>
      <p>
        How might we make it a cultural norm to reduce your impact on nature?
      </p>
    </div>
  );
};

export default UserServiceCard;
