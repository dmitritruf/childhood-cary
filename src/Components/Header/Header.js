import React from "react";
// react icons
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-8 text-sm  lg:items-center lg:justify-around hidden lg:flex bg-gray-800 text-slate-300 font-medium ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center mr-8 cursor-pointer hover:text-yellow-200">
          <MdLocationOn />
          <a
            href="https://goo.gl/maps/StDYmumiA24MEsm49"
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            Chennai, 600116, India
          </a>
        </div>
        <div className="flex items-center justify-center mr-8 cursor-pointer hover:text-yellow-200">
          <IoCall />
          <a href="tel:9940595094" rel="noreferrer" className="ml-2">
            +91-9940595094
          </a>
        </div>
        <div className="flex items-center justify-center cursor-pointer hover:text-yellow-200">
          <IoMdMail />
          <a
            href="mailto:cleftwithoutcaries@gmail.com"
            rel="noreferrer"
            className="ml-2"
          >
            cleftwithoutcaries@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <FaTwitter className="mr-3 cursor-pointer hover:text-yellow-200 text-lg" />
        <FaInstagram className="mr-3 cursor-pointer hover:text-yellow-200 text-lg" />
        <FaFacebook className="mr-3 cursor-pointer hover:text-yellow-200 text-lg" />
      </div>
    </header>
  );
};

export default Header;
