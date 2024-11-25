import React, { useState } from 'react';
import '../Styles/Navigation.css';
import logo from "/Images/Hiker_india_Logo_-removebg-preview.png";
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbarDiv'>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: "30px" }} />
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {/* Links to sections using #id */}
          <li><Link to="/#home">Home</Link></li>
          <li> <Link to="/#about">About</Link></li>
          <li><Link to="/#gallery">Gallery</Link></li>
          <li><Link to="/#trip">Trip</Link></li>
          <li><Link to="/#upcoming-trips">Upcoming Trips</Link></li>
          <li><Link to="/#blog">Blog</Link></li>
          <li><Link to="/#contact">Contact Us</Link></li>
        </ul>
        <button className="explore-button">
          <svg
            className="svgIcon"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore
        </button>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
