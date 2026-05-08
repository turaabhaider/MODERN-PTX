import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="main-footer">
      {/* Section 1: Newsletter */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h2>NEWSLETTER</h2>
            <p>To receive our updates via email</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>

      {/* Section 2: Info Panel */}
      <div className="info-panel">
        <div className="info-container">
          <div className="info-brand">
            <h2>WE ARE HERE</h2>
            <p>We are your trusted authentic low cost sourcing partner, always ready to create real benefits in your supply chain.</p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="label">LOC:</span> 
                <span>Laguna Beach, CA 92651</span>
              </div>
              <div className="detail-item">
                <span className="label">TEL:</span> 
                <span>1 (949) 283-9554</span>
              </div>
              <div className="detail-item">
                <span className="label">HRS:</span> 
                <span>Mon — Sat | 9:00 AM — 6:00 PM</span>
              </div>
            </div>
          </div>
          
          <div className="info-social">
            <h3>FOLLOW US</h3>
            <div className="social-links-text">
              <span className="social-link">FACEBOOK</span>
              <span className="social-link">INSTAGRAM</span>
              <span className="social-link">LINKEDIN</span>
              <span className="social-link">TWITTER</span>
            </div>
          </div>
        </div>
      </div>
          
      {/* Section 3: Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-brand-links">
          <span>FB</span>
          <span>IG</span>
          <span>LI</span>
          <span>TW</span>
        </div>
        <p>© 2026 Copyright: Paktex.com</p>
      </div>
    </footer>
  );
};

export default Footer;