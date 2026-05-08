import React from 'react';
import '../styles/Hero.css';

const Hero = () => (
  <header id="home" className="hero">
    <div className="hero-content">
      <h4 className="reveal">PROFESSIONAL</h4>
      <h1 className="reveal">Apparel Solutions<span>.</span></h1>
      <p className="reveal">
        Precision sourcing and manufacturing for global brands. Delivering 
        excellence through industrial-scale textile innovation.
      </p>
      <div className="hero-btns reveal">
        {/* Mobile-Ready Link to Fabric Component */}
        <a href="#fabrics" className="btn-link">
          <button className="btn-extreme-dark">View Fabrics</button>
        </a>
        
        {/* Mobile-Ready Link to Partner Component */}
        <a href="#partner" className="btn-link">
          <button className="btn-extreme-outline">Our Capability</button>
        </a>
      </div>
    </div>
  </header>
);

export default Hero;