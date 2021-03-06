import React, { useState } from "react";
// react router
import { Link } from "react-router-dom";
// images
import logo from "../Assets/logo.png";
import openMenu from "../Assets/open.svg";
import closeMenu from "../Assets/close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Our Team", link: "/team" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between pt-2 bg-indigo-600">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-16 h-20 object-contain md:w-22 lg:w-24 mx-10 md:mx-20 pb-2"
        />
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="w-4 relative right-10 -top-1 md:hidden cursor-pointer z-20"
      >
        <img
          src={open ? closeMenu : openMenu}
          alt="hamburger menu"
          className="cursor-pointer"
        />
      </div>
      <ul
        className={`md:pl-10 pr-28 md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear bg-indigo-600 z-10 ${
          !open ? "right-[-100%]" : "right-0"
        } ${open ? "right-0" : "right-[-100%]"}`}
      >
        {Links.map((link, index) => (
          <Link to={link.link}>
            <li
              key={index}
              className="md:inline-block md:mx-8 mx-6 md:my-0 my-16 text-white hover:text-yellow-300 hover:underline font-medium text-sm md:text-sm lg:text-base"
            >
              <a href="/" className="text-md md:py-2 py-3 inline-block">
                {link.name}
              </a>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
