import React from 'react';
import '../styles/Fabric.css';

const fabricData = [
  { id: 1, name: "KNIT", image: "https://home.paktex.com/assets/Knit-DyTOBR5B.webp" },
  { id: 2, name: "WOVEN", image: "https://home.paktex.com/assets/Woven-yC6XDqOA.webp" },
  { id: 3, name: "OUTER WEAR", image: "https://home.paktex.com/assets/Outerwear-BzLSMbOv.webp" },
  { id: 4, name: "ACTIVE WEAR", image: "https://home.paktex.com/assets/Activewear-CFdd_lGu.webp" },
  { id: 5, name: "DENIM", image: "https://home.paktex.com/assets/Denim-C24LFFHO.webp" },
  { id: 6, name: "ACCESSORIES", image: "https://home.paktex.com/assets/Acessories-RMIkIM8Q.webp" }
];

const Fabric = () => {
  return (
    <section id="fabrics" className="fabric-section">
      {/* Side Vertical Title */}
      <div className="side-label">FABRIC</div>

      <div className="fabric-grid">
        {fabricData.map((item) => (
          <div key={item.id} className="fabric-item reveal">
            <div className="fabric-image-wrapper">
              <img src={item.image} alt={item.name} />
              <div className="fabric-overlay">
                <h2>{item.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fabric;