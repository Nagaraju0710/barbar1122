import React from 'react';
import "../CSS/Navbar.css"; // Import your CSS file for styling
import logo from "../Images/logo.jpg"
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <Image  borderRadius="full"
  boxSize='50px' src={logo} alt="Logo" />
      </div>
      <div className="heading">
        <h2>
          <span className="multi-color">Naveen's</span> <span className="multi-color">Hair</span> <span className="multi-color">Salon</span>
        </h2>
      </div>
      <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
        <Link to="/mens" className="nav-link">Men's</Link>
        <Link to="/kids" className="nav-link">Kids</Link>
        <Link to="/colour" className="nav-link">Hair Colours</Link>
        <Link to="/beard" className="nav-link">Beard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
