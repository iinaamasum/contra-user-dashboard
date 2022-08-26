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
  const [scrollNav, setScrollNav] = useState(false);
  const navLinks = [
    { id: 1, path: '/', name: 'Discover' },
    { id: 2, path: '/projects', name: 'Projects' },
    { id: 3, path: '/opportunities', name: 'Opportunities' },
  ];
  return (
    <div
      style={{
        boxShadow: 'rgb(228 232 247 / 40%) 0px 0px 80px',
      }}
      className={`sticky top-0 z-50 h-[83px] shadow backdrop-blur-[13px] bg-transparent
      }`}
    >
      <div className="flex items-center justify-between h-full max-w-[1440px] m-auto">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-[30px] w-[160px]" src={logo} alt="" />
          </Link>
          <div className="hidden lg:flex">
            <ul className="flex items-center p-0 text-textColor font-semibold text-base">
              {navLinks.map((link) => (
                <li key={link.id} className="ml-[32px]">
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex text-textColor">
          <p className="lg:block hidden">
            <button className="inline-flex items-center gap-x-2 px-5 h-[48px] rounded-full border-[1px] mr-[8px] hover:bg-[#f6f6f6]">
              <RiWalletLine size={30} className="text-gray-700" /> $0.00
            </button>
            <button className="p-2 hover:bg-[#f6f6f6] rounded-full mr-[8px]">
              <BiMessageRoundedDots size={30} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-[#f6f6f6] rounded-full mr-[8px]">
              <BsBell size={30} className="text-gray-700" />
            </button>
            <button className="inline-flex items-center gap-x-2 px-2 py-2 hover:bg-[#f6f6f6] rounded-xl h-[48px] border-[1px]">
              <img
                src={userImg}
                alt=""
                className="w-8 h-8 rounded-full bg-black"
              />
              Independent
              <RiArrowDownSLine size={30} className="text-gray-700" />
            </button>
          </p>
          <label className="btn btn-circle swap swap-rotate lg:hidden visible">
            <input type="checkbox" />
            <MdCloseFullscreen
              onClick={() => setNavOpen(!navOpen)}
              className={'swap-on fill-current'}
              size={30}
            />
            <AiOutlineMenuUnfold
              onClick={() => setNavOpen(!navOpen)}
              className={'swap-off fill-current'}
              size={30}
            />
          </label>
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
