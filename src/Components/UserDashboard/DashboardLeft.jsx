import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBadgeCheck, BiLinkExternal } from 'react-icons/bi';
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaXbox,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import userImg from '../../Assets/image/userImg.png';
import './DashboardLeft.css';

const DashboardLeft = () => {
  const userProfession = [
    { id: 1, title: 'Backend Engineer' },
    { id: 2, title: 'Frontend Engineer' },
    { id: 3, title: 'Web Developer' },
  ];
  return (
    <div className="w-full lg:w-[500px] lg1300:w-[515px] px-[10px] md:px-[32px] py-[30px] lg:py-[92px] my-[40px] flex items-center justify-center rounded-2xl dashboard__left__bg lg:sticky lg:top-0">
      <div className="w-full sm:w-[364px] px-4 sm:px-0 flex flex-col items-center justify-center">
        {/* profile image  */}
        <div className="w-[210px] h-[210px] rounded-full bg-black">
          <img
            className="h-full w-full object-fill rounded-full"
            src={userImg}
            alt=""
          />
        </div>
        {/* name and profession  */}
        <div className="hover:bg-grayWhite w-full py-3 flex items-center justify-center rounded-lg my-3 cursor-pointer">
          <h2 className="name__text__gradient">Md. Masum Mia</h2>
          <BiBadgeCheck size={30} className="ml-1 text-gray-400" />
        </div>
        <div className="mt-1">
          <button className="bd-white py-3 px-8 rounded-full border-[2px] border-btnColor text-base font-semibold hover:bg-grayWhite">
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
        <div className="mt-5 w-full flex items-center justify-between">
          <button className="inline-flex items-center justify-center text-black font-semibold gap-x-2 py-[10px] rounded-full text-lg w-[85%] get__started__btn__gradient">
            <FaTelegramPlane size={25} color="" />
            Get In Touch
          </button>
          <button className="w-[13%] border-[1px] border-btnColor p-[6px] rounded-full flex items-center justify-center hover:bg-grayWhite">
            <AiOutlineHeart size={35} className="" />
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
