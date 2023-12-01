import React, { useState } from 'react'
import "../styles/navbar.css"
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="logo">Movies</div>
      <input type="text" placeholder="Search Movie" />
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <p >Sign up</p>
        </li>
      </ul>
    </div>
  )
}
