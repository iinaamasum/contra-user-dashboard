import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { BiBadgeCheck, BiLinkExternal } from 'react-icons/bi';
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaXbox,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import userImg from '../../Assets/logo/user.png';

const DashboardLeft = () => {
  const userProfession = [
    { id: 1, title: 'Backend Engineer' },
    { id: 2, title: 'Frontend Engineer' },
    { id: 3, title: 'Web Developer' },
  ];
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.43)',
        boxShadow: 'rgb(228 232 247 / 40%) 0px 0px 80px',
      }}
      className="w-[515px] px-[32px] py-[92px] my-[40px] flex items-center justify-center rounded-2xl"
    >
      <div className="w-[364px] flex flex-col items-center justify-center">
        {/* profile image  */}
        <div className="w-[210px] h-[210px] rounded-full bg-black">
          <img className="h-full w-full object-fill" src={userImg} alt="" />
        </div>
        {/* name and profession  */}
        <div className="hover:bg-primaryWhite w-full py-3 flex items-center justify-center rounded-lg mt-2">
          <h2 className="name__text__gradient">Md. Masum Mia</h2>
          <BiBadgeCheck size={30} className="ml-1 text-gray-400" />
        </div>
        <div className="mt-1">
          <button className="bd-white py-3 px-8 rounded-full border-[2px] border-[#f2c94c] text-base font-semibold hover:bg-primaryWhite">
            Verify Your Identity
          </button>
        </div>
        <div className="mt-5 text-sm text-center">
          {userProfession.map((prof) => (
            <button
              style={{
                border: '1px solid transparent',
                boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
              }}
              className="bg-white py-2 px-4 rounded-3xl m-1"
            >
              {prof.title}
            </button>
          ))}
        </div>
        {/* message btn  */}
        <div className="mt-5 w-full">
          <button className="inline-flex items-center justify-center w-full bg-black hover:bg-gray-700 text-primaryWhite font-semibold gap-x-1 py-[10px] rounded-full text-lg">
            <AiFillMessage size={25} color="" />
            Work With Me
          </button>
        </div>
        {/* bio  */}
        <div className="mt-6">
          <p className="text-center text-gray-700 font-normal text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            atque assumenda. Quod ipsum quidem eius molestias praesentium
            doloribus. Impedit obcaecati commodi dolores, adipisci, maxime nam
            nesciunt molestiae cum velit eos sequi vel ullam repellendus ipsum
            fuga eum nihil libero repellat voluptatem assumenda consequuntur
            fugit quae.
          </p>
        </div>
        {/* location and links */}
        <div className="mt-5">
          <p className="inline-flex items-center justify-center text-xl font-medium text-gray-700">
            <GoLocation className="mr-1" />
            Rajshahi, Bangladesh
          </p>
          <div className="flex items-center justify-center gap-x-4 mt-4">
            <FaInstagram
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
            <FaGithub
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
            <FaFacebook
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
            <FaBehance
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
            <FaXbox
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
            <BiLinkExternal
              size={28}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeft;
