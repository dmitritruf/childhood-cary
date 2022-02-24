import React, { useState } from "react";
import { Link } from "react-router-dom";
// styles
import "./Nav.css";
// images
import logo from "../../Assets/logo.png";
import openMenu from "../../Assets/open.svg";
import closeMenu from "../../Assets/close.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <nav className="nav py-6 md:py-2">
        <ul className="nav__list">
          <li className="nav__listlogo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <div
            className="relative md:hidden lg:relative left-6 z-20"
            onClick={() => setOpen(!open)}
          >
            <img
              src={open ? closeMenu : openMenu}
              alt="hamburger menu"
              className="cursor-pointer w-5"
            />
          </div>
          <div className="flex">
            <li className="nav__listitem">
              EEC
              <ul className="nav__listitemdrop">
                <li>What is ECC?</li>
                <li>Clinical Presentation</li>
                <li>Early Changes</li>
                <li>Treatment</li>
                <li>FAQ</li>
              </ul>
            </li>
            <li className="nav__listitem">
              Parents
              <ul className="nav__listitemdrop">
                <li>First Dental Visit</li>
                <li>Infant Oral Care</li>
                <li>Toothpaste</li>
                <li>Oral Hygiene Aids</li>
                <li>Oral Hygiene Videos</li>
                <li>Reading Resources</li>
              </ul>
            </li>
            <li className="nav__listitem">
              Campaigns
              <ul className="nav__listitemdrop">
                <li>DECCAN</li>
                <li>Financial Assistance</li>
                <Link to="/donate">
                  <li>Donate</li>
                </Link>
              </ul>
            </li>
            <li className="nav__listitem">
              About
              <ul className="nav__listitemdrop last__item">
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/team">
                  <li>Our Team</li>
                </Link>
                <Link to="/contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
