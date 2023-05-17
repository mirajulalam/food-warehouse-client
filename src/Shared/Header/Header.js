import React from "react";
import headerImage from "../../image/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="font-semibold  hover: underline underline-offset-4"
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact" className="font-semibold">
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white text-black shadow-lg lg:px-16 md:px-8 z-50 top-0 sticky">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-20 h-10" src={headerImage} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="font-semibold">Sing In</Link>
      </div>
    </div>
  );
};

export default Header;
