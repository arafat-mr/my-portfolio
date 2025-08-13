import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = ({setTheme}) => {
  
  const links = (
    <>
      <NavLink to="/" className=" ">
        Home
      </NavLink>
      <NavLink to="/" className=" ">
        About
      </NavLink>
      <NavLink to="/" className=" ">
        Projects
      </NavLink>
      <NavLink to="/" className=" ">
        Contact Me
      </NavLink>
    </>
  );

  return (
    <>
      <div className="drawer">
        <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />

        {/* Navbar */}
        <div className="drawer-content">
          <div className="navbar  max-w-full mx-auto  backdrop-blur-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] px-5 h-10 bg-transparent">
            {/* Left side */}
            <div className="navbar-start">
              {/* Drawer toggle for mobile */}
              <label
                htmlFor="drawer-toggle"
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden -ml-7 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
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
              </label>

              {/* Logo */}
              <div className="flex justify-center items-center  md:px-4">
                <img className="w-48" src="./logo.png" alt="" />
              </div>
            </div>

            {/* Center menu for large screens */}

            {/* Right side */}
            <div className="navbar-end  md:px-4 space-x-6 ">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5  text-lg">
                  {links}
                </ul>
              </div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                  onChange={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                  }
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Drawer side menu */}
        <div className="drawer-side  ">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>

          <ul className="menu p-4 w-60 min-h-full bg-white/30 backdrop-blur-3xl text-lg text-white text-center ">
            <div className="flex flex-col items-center justify-center mb-6">
              <img src="./logo.png" alt="" />
            </div>

            <div className="flex flex-col items-center space-y-4 mt-8 md:mt-10">
              {links}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
