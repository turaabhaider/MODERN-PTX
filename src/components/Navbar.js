import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">PTX<span>.</span></div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          <a href="#home">Home</a>
          <a href="#partner">About</a>
          <a href="#products">Services</a>
          <a href="#ethics">Ethics</a>
          <a href="#fabrics">Fabrics</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger Toggle - Stays in position for Mobile */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Side Drawer (Matches your screenshot layout) */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#home" onClick={toggleMenu}>HOME</a>
          <a href="#partner" onClick={toggleMenu}>ABOUT</a>
          <a href="#products" onClick={toggleMenu}>SERVICES</a>
          <a href="#ethics" onClick={toggleMenu}>ETHICS</a>
          <a href="#fabrics" onClick={toggleMenu}>FABRICS</a>
          <a href="#contact" onClick={toggleMenu}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;