import React from 'react';
import './Hero.css';  // Link to the Hero CSS file
import mypic from '../images/crop enhanced .jpg'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Ashokkumar K</span>
            <br />
            Software Developer
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences with code and creativity
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn">Get in touch</a>
            <a href="#projects" className="hero-btn secondary-btn">View work</a>
          </div>
        </div>
        <div className="hero-image-container">
          {/* <img
            src={mypic}
            alt="Profile"
            className="hero-image"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
