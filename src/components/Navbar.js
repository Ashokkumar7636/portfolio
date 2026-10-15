import React from 'react';
import './Navbar.css';

function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className={`navbar-logo ${activeSection === 'home' ? 'active' : ''}`}>Portfolio</a>
        <ul className="navbar-links">
          <li><a href="#home" className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
          <li><a href="#about" className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
          <li><a href="#skills" className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
          <li><a href="#projects" className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
          <li><a href="#education" className={`navbar-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a></li>
          <li><a href="#contact" className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
