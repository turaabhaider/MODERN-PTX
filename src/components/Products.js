import React, { useState } from 'react';
import '../styles/Products.css';

const services = [
  {
    id: "01",
    title: "Research & Development",
    desc: "In-depth trend analysis, fabric sourcing, and market research to ensure your collection is built on strong insights. We focus on innovation, sustainability, and material selection to create a solid foundation for modern apparel.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070"
  },
  {
    id: "02",
    title: "Design & Sampling",
    desc: "From initial sketches to final samples, we transform creative ideas into high-quality garments. Our design team ensures attention to detail, accurate fittings, and refined aesthetics to match global fashion expectations.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070"
  },
  {
    id: "03",
    title: "Production",
    desc: "Advanced manufacturing processes combined with strict quality control ensure consistent output. We prioritize efficiency, durability, and precision to deliver garments that meet international standards and timelines.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070"
  },
  {
    id: "04",
    title: "Operation Support",
    desc: "Comprehensive operational support including logistics, compliance, and supply chain management. We streamline processes to ensure smooth coordination, timely delivery, and seamless global distribution.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
  }
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="products" className="foundation-section">
      <div className="foundation-grid">
        
        {/* Left Side: Content List */}
        <div className="foundation-left reveal">
          <div className="foundation-header">
            <span className="subtitle">Core Services</span>
            <h2>The Foundation<span>.</span></h2>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-item ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="item-header">
                  <span className="item-id">{service.id}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="item-body">
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dynamic Image Display */}
        <div className="foundation-right reveal">
          <div className="image-viewer">
            {services.map((service, index) => (
              <img 
                key={service.id}
                src={service.image} 
                alt={service.title}
                className={activeIndex === index ? 'visible' : ''}
              />
            ))}
            <div className="image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;