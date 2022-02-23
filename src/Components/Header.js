import React from "react";
// react icons
import { MdLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-8 text-sm  lg:items-center lg:justify-around hidden lg:flex bg-gray-800 text-gray-300">
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
          <BsTelephone />
          <a href="tel:7767018905" rel="noreferrer" className="ml-2">
            +91-7767018905
          </a>
        </div>
        <div className="flex items-center justify-center cursor-pointer hover:text-yellow-200">
          <HiOutlineMail />
          <a
            href="mailto:eccpathfinders@gmail.com"
            rel="noreferrer"
            className="ml-2"
          >
            eccpathfinders@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <FaTwitter className="mr-3 cursor-pointer hover:text-yellow-200" />
        <FaInstagram className="mr-3 cursor-pointer hover:text-yellow-200" />
        <FaFacebook className="mr-3 cursor-pointer hover:text-yellow-200" />
      </div>
    </header>
  );
};

export default Header;
