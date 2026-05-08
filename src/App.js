import React, { useEffect } from 'react';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partner from './components/Partner'; 
import Products from './components/Products';
import Ethics from './components/Ethics';
import Fabric from './components/Fabric';
import Footer from './components/Footer';
// Styles
import './index.css';

function App() {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal();
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      {/* 1. Hero: Now contains the 'View Fabrics' and 'Our Capability' buttons */}
      <Hero />
      
      {/* 2. Strategy: Concept to Delivery (id="partner") */}
      <Partner /> 
      
      {/* 3. Capability: The Foundation grid (id="products") */}
      <Products /> 
      
      {/* 4. Ethics: Ezra Pound Quote (id="ethics") */}
      <Ethics />
      
      {/* 5. Materials: The Fabric Grid (id="fabrics") */}
      <Fabric />
      
      {/* 6. Infrastructure Section (id="about") */}
      <section id="about" className="reveal about-minimal">
        <div className="about-content">
          <span className="subtitle">Infrastructure</span>
          <h2>Global Logistics<span>.</span></h2>
          <p>
            From raw fiber sourcing to international export, PTX manages the 
            entire supply chain with clinical precision.
          </p>
        </div>
      </section>

      {/* 7. Contact & Footer (id="contact") */}
      <Footer />
    </div>
  );
}

export default App;