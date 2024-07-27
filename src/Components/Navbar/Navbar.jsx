import React, { useState } from 'react';
 import './navbar.css';
import { FaSailboat } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#home" className="logo flex">
            <h1>
              <FaSailboat className="icon" />
              ORU Tour
            </h1>
            <span>AMOR de tour</span>
          </a>
        </div>
        <div className={`navBar ${isNavOpen ? 'open' : ''}`}>
          <ul className="navLists flex">
          <li className="navItem">
              <a href="#main" smooth={true} className="navLink" onClick={toggleNav}>HOME</a>
            </li>
            <li className="navItem">
              <a href="#home" smooth={true} className="navLink" onClick={toggleNav}>Cities</a>
            </li>
            <li className="navItem">
              <a href="#about" smooth={true} className="navLink" onClick={toggleNav}>About</a>
            </li>
            {/* <li className="navItem">
              <Link to="main" smooth={true} className="navLink" onClick={toggleNav}>Shop</Link>
            </li> */}
            <li className="navItem">
              <a href="#contacts" smooth={true} className="navLink" onClick={toggleNav}>Contacts</a>
            </li>
            {/* <li className="navItem">
              <Link to="shop" smooth={true} className="navLink" onClick={toggleNav}>Shop</Link>
            </li> */}
            {/* <li className="navItem">
              <Link to="main" smooth={true} className="navLink" onClick={toggleNav}>Main</Link>
            </li> */}
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div className="languageSwitcherContainer">
            <LanguageSwitcher /> {/* Add the language switcher here */}
          </div>
          <div className="closeNavbar" onClick={toggleNav}>
            <IoMdCloseCircle className='icon' />
          </div>
        </div>
        <div className="toggleNavbar" onClick={toggleNav}>
          <TbGridDots />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
