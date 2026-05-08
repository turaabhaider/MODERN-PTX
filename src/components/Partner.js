import React from 'react';
import '../styles/Partner.css';

const Partner = () => {
  const values = [
    { id: "01", text: "Flexible business models designed to support short lead times, optimized costs, and scalable production volumes." },
    { id: "02", text: "Sustainable product solutions focused on eco-friendly materials, responsible sourcing, and long-term environmental impact." },
    { id: "03", text: "Strong global sourcing and production network across low-cost and duty-free regions to ensure efficiency and reliability." },
    { id: "04", text: "Competitive pricing strategies combined with high-quality service to deliver maximum value across the entire supply chain." }
  ];

  return (
    <section id="partner" className="premium-about-section">
      {/* Side Label */}
      <div className="vertical-label">ABOUT US</div>

      <div className="about-split-grid">
        
        {/* Left Side: Professional Content */}
        <div className="about-left reveal">
          <div className="main-narrative">
            <h1 className="main-title">YOUR GLOBAL APPAREL PARTNER</h1>
            <h3 className="sub-title">FROM CONCEPT TO DELIVERY<span>.</span></h3>
            
            <p className="description-text">
              Manufacturing, sourcing, and quality assurance powered by our advanced custom PLM system. 
              We deliver end-to-end apparel solutions with precision and consistency, ensuring every 
              product meets global standards. From concept development to final production, our 
              integrated workflow guarantees transparency, speed, and seamless collaboration.
            </p>
          </div>

          {/* Corrected 2x2 Feature Grid */}
          <div className="values-grid">
            {values.map((v, index) => (
              <div key={v.id} className={`value-item delay-${index}`}>
                <div className="value-header">
                  <span className="value-id">{v.id}</span>
                  <div className="header-line"></div>
                </div>
                <p className="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Enhanced Image Display */}
        <div className="about-right reveal">
          <div className="image-frame-architectural">
            <img src="https://home.paktex.com/assets/sectionimage1-CKfI92hq.webp" alt="Industrial Manufacturing" />
            <div className="frame-overlay-details"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partner;