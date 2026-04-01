import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import CTA from './sections/CTA';
import BrandSection from './sections/BrandSection';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <BrandSection />
      <CTA />
      
      <Footer />
    </div>
  );
}

export default App;
