import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
              <Link to="main" smooth={true} className="navLink" onClick={toggleNav}>HOME</Link>
            </li>
            <li className="navItem">
              <Link to="home" smooth={true} className="navLink" onClick={toggleNav}>Cities</Link>
            </li>
            <li className="navItem">
              <Link to="about" smooth={true} className="navLink" onClick={toggleNav}>About</Link>
            </li>
            {/* <li className="navItem">
              <Link to="main" smooth={true} className="navLink" onClick={toggleNav}>Shop</Link>
            </li> */}
            <li className="navItem">
              <Link to="contacts" smooth={true} className="navLink" onClick={toggleNav}>Contacts</Link>
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
