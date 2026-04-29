import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { TbSnowflake, TbSnowflakeOff } from "react-icons/tb";
import { useContext } from "react";
import { ThemeContext } from "../AssetsContext";

import { RiDownloadCloud2Line } from "react-icons/ri";

import resume from "../assets/Sadik_Sourov_Resume.pdf";

const NavBar = () => {
  const { snowFall, setSnowFall, setPartical, partical } =
    useContext(ThemeContext);

  const handleSnowFall = () => {
    setSnowFall(!snowFall);
  };



  return (
    <div className="relative z-50">
      <div className="navbar md:px-0 pr-4 md:w-10/12 mx-auto">
        <div className="navbar-start w-max flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              id="menu"
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="">
              <NavLink
                to="/home"
                className="p-[3px] rounded-full w-max z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/about"
                className="p-[3px] rounded-full w-max  z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative">
                  About
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/skill"
                className="p-[3px] rounded-full w-max  z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative">
                  Skill
                </span>
              </NavLink>
            </li>
        
            <li className="">
              <NavLink
                to="/projects"
                className="p-[3px] rounded-full w-max  z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative">
                  Projects
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className="p-[3px] rounded-full w-max  z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary text-xs px-4 py-[4px] rounded-full relative">
                  Contact
                </span>
              </NavLink>
            </li>
            <a
            href={resume}
            download={true}
            className="btn bg-transparent px-[2px] mt-2 duration-300 hover:text-pColor py-[2px] explore-btn  rounded-full  h-max min-h-max  border-none hover:border-none"
          >
            <span className="bg-primary text-xs flex items-center gap-1 border-t border-[#8636ff]/50 px-3   py-2 rounded-full relative ">
              Download Resume <RiDownloadCloud2Line />
            </span>
          </a>
            </ul>
          </div>
          <Link to="/home" className="flex items-center text-sm md:text-xl font-bold gap-1">
            <img className="md:w-7 w-5 mb-1" src={logo} alt="" /> Sadik The
            Developer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            <li className="">
              <NavLink
                to="/home"
                className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary px-4 py-[4px] rounded-full relative">
                  Home
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/about"
                className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary px-4 py-[4px] rounded-full relative">
                  About
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/skill"
                className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary px-4 py-[4px] rounded-full relative">
                  Skill
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/projects"
                className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary px-4 py-[4px] rounded-full relative">
                  Projects
                </span>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/contact"
                className="p-[3px] rounded-full z-0 bg-transparent hover:bg-pColor/50 border-none btn min-h-max h-max"
              >
                <span className="bg-primary px-4 py-[4px] rounded-full relative">
                  Contact
                </span>
              </NavLink>
            </li>
          </ul>

          <a
            href={resume}
            download={true}
            className="btn bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn  rounded-full  h-max min-h-max  border-none hover:border-none"
          >
            <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 px-6   py-3 rounded-full relative ">
              Download Resume <RiDownloadCloud2Line />
            </span>
          </a>
        </div>
        <div className="navbar-end w-max pl-5 gap-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="light"
              onClick={() => setPartical(!partical)}
            />

            {/* sun icon */}
            <svg
              className="swap-off md:h-7 h-5 md:w-7 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on md:h-7 h-5 md:w-7 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleSnowFall} />

            {/* sun icon */}
            <TbSnowflake className="swap-on md:h-6 h-5 md:w-6 w-5 fill-current" />

            {/* moon icon */}
            <TbSnowflakeOff className="swap-off md:h-6 h-5 md:w-6 w-5 fill-current" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
