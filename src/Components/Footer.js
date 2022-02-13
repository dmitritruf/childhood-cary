import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="w-full mx-auto py-6 bg-gray-800 md:py-14">
      <div className="flex flex-col sm:flex-row justify-around items-center text-white">
        <div className="flex justify-center items-center flex-wrap md:flex-nowrap">
          <div className="mx-4">
            <h2 className="text-md mb-2 border-b border-b-indigo-500 py-1 ">
              About us
            </h2>
            <div>
              <Link to="/about">
                <li className="list-none text-sm text-gray-300">Know more</li>
              </Link>
              <Link to="/about">
                <li className="list-none text-sm text-gray-300">Our mission</li>
              </Link>
            </div>
          </div>
          <div className="mx-4">
            <h2 className="text-md mb-2 border-b border-b-indigo-500 py-1 ">
              Our Team
            </h2>
            <div>
              <Link to="/team">
                <li className="list-none text-sm text-gray-300">Know More</li>
                <li className="list-none text-sm text-gray-300">Join us</li>
              </Link>
            </div>
          </div>
          <div className="mx-4">
            <h2 className="text-md mb-2 border-b border-b-indigo-500 py-1 ">
              Contact
            </h2>
            <div>
              <Link to="/contact">
                <li className="list-none text-sm text-gray-300">Message</li>
                <li className="list-none text-sm text-gray-300">Donate</li>
              </Link>
            </div>
          </div>
          <div className="mx-4 py-3 md:py-0">
            <h2 className="text-md mb-2 border-b border-b-indigo-500 py-1 ">
              T & C
            </h2>
            <div>
              <li className="list-none text-sm text-gray-300">
                Privacy Policy
              </li>
              <li className="list-none text-sm text-gray-300">Services</li>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center pt-8 md:py-0">
          <h4 className="text-md">Connect with us</h4>
          <div className="flex justify-between items-center">
            <div className="mx-2 text-2xl my-2 cursor-pointer hover:text-yellow-300">
              <FaFacebookF />
            </div>
            <div className="mx-2 text-2xl my-2 cursor-pointer hover:text-yellow-300">
              <BsTwitter />
            </div>
            <div className="mx-2 text-2xl my-2 cursor-pointer hover:text-yellow-300">
              <FaYoutube />
            </div>
            <div className="mx-2 text-2xl my-2 cursor-pointer hover:text-yellow-300">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
