import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { MdCloseFullscreen } from 'react-icons/md';
import { RiArrowDownSLine, RiWalletLine } from 'react-icons/ri';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';
import userImg from '../../Assets/logo/user.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    // { id: 1, path: '/', name: 'Discover' },
    { id: 2, path: '/projects', name: 'Projects' },
    { id: 3, path: '/opportunities', name: 'Opportunities' },
  ];
  return (
    <div
      style={{
        boxShadow: 'rgb(228 232 247 / 40%) 0px 0px 80px',
      }}
      className="sticky top-0 z-50 h-[83px] backdrop-blur-[8px] bg-[rgba(255,255,255,0.86)]
      "
    >
      <div className="flex items-center justify-between h-full max-w-[1440px] mx-auto px-[30px]">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-[30px] w-[160px] mr-5" src={logo} alt="" />
          </Link>
          <div className="hidden lg:flex">
            <ul className="flex items-center p-0 text-textColor font-semibold text-base">
              <li className="mx-4">
                <NavLink
                  to="/"
                  className="hover:text-black transition-all duration-150"
                >
                  Discover
                  <span
                    style={{
                      background:
                        'linear-gradient(270deg, rgb(255, 158, 49) 12.52%, rgb(255, 90, 94) 91.19%)',
                    }}
                    className="mx-2 py-[3px] px-[8px] rounded-xl text-white"
                  >
                    Beta
                  </span>
                </NavLink>
              </li>
              {navLinks.map((link) => (
                <li key={link.id} className="mx-4">
                  <NavLink
                    to={link.path}
                    className="hover:text-black transition-all duration-150"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex text-textColor">
          <p className="lg:block hidden">
            <button className="inline-flex items-center gap-x-2 px-5 h-[48px] rounded-full border-[1px] mr-[8px] hover:bg-primaryWhite hover:text-black transition-all duration-150">
              <RiWalletLine size={30} className="text-gray-700" /> $0.00
            </button>
            <button className="p-2 hover:bg-primaryWhite rounded-full mr-[4px]">
              <BiMessageRoundedDots size={30} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-primaryWhite rounded-full mr-[8px]">
              <BsBell size={30} className="text-gray-700" />
            </button>
            <button className="inline-flex items-center gap-x-2 px-2 py-2 hover:bg-primaryWhite rounded-xl h-[48px] border-[1px] hover:text-black transition-all duration-150">
              <img
                src={userImg}
                alt=""
                className="w-8 h-8 rounded-full bg-black"
              />
              Independent
              <RiArrowDownSLine size={30} className="text-gray-700" />
            </button>
          </p>
          <div className="block lg:hidden">
            {navOpen ? (
              <MdCloseFullscreen
                onClick={() => setNavOpen(!navOpen)}
                className={'swap-on fill-current'}
                size={30}
              />
            ) : (
              <AiOutlineMenuUnfold
                onClick={() => setNavOpen(!navOpen)}
                className={'swap-off fill-current'}
                size={30}
              />
            )}
          </div>
        </div>
        <ul
          className={
            'w-full lg:hidden visible' + (navOpen ? 'flex-col' : ' hidden')
          }
        >
          {navLinks.map((link) => (
            <li key={link.id} className="w-full py-2 shadow text-center">
              <Link className="w-full text-xl text-gray-400" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
