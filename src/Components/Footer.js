import React from "react";
// components
import Copyright from "./Copyright";

// react icons
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

// react router
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mx-auto py-6 bg-gray-800 md:py-8">
      <div className="flex flex-col lg:flex-row justify-between px-0 md:px-10 lg:px-20 items-center text-white">
        <div className="flex justify-left items-start flex-wrap md:flex-nowrap">
          <div className="mx-5">
            <h2 className="text-md mb-2 border-b border-b-indigo-600 py-1 ">
              ECC
            </h2>
            <div>
              <li className="list-none text-sm text-white">What is ECC?</li>
              <li className="list-none text-sm text-white">
                Clinical Presentation
              </li>
              <li className="list-none text-sm text-white">Early Changes</li>
              <li className="list-none text-sm text-white">Treatment</li>
              <li className="list-none text-sm text-white">FAQ</li>
            </div>
          </div>
          <div className="mx-5">
            <h2 className="text-md mb-2 border-b border-b-indigo-600 py-1 ">
              Parents
            </h2>
            <div>
              <Link to="/team">
                <li className="list-none text-sm text-white">
                  First Dental Visit
                </li>
                <li className="list-none text-sm text-white">
                  Infant Oral Care
                </li>
                <li className="list-none text-sm text-white">Toothpaste</li>
                <li className="list-none text-sm text-white">
                  Oral Hygiene Aids{" "}
                </li>
                <li className="list-none text-sm text-white">
                  Oral Hygiene Videos
                </li>
                <li className="list-none text-sm text-white">
                  Reading Resources
                </li>
              </Link>
            </div>
          </div>
          <div className="mx-5 py-3 md:py-0">
            <h2 className="text-md mb-2 border-b border-b-indigo-600 py-1 ">
              Campaigns
            </h2>
            <div>
              <Link to="/contact">
                <li className="list-none text-sm text-white">DECCAN</li>
                <li className="list-none text-sm text-white">
                  Financial Assistance
                </li>
                <li className="list-none text-sm text-white">Donate</li>
              </Link>
            </div>
          </div>
          <div className="mx-5 py-3 md:py-0">
            <h2 className="text-md mb-2 border-b border-b-indigo-600 py-1 ">
              About
            </h2>
            <div>
              <Link to="/about">
                <li className="list-none text-sm text-white">About Us</li>
              </Link>
              <Link to="/team">
                <li className="list-none text-sm text-white">Our Team</li>
              </Link>
              <Link to="/contact">
                <li className="list-none text-sm text-white">Contact Us</li>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center pt-8 md:pt-8 lg:pt-0">
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
