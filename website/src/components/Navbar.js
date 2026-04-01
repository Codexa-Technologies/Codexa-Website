import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaWhatsapp } from 'react-icons/fa';
import codingAnimation from '../assets/qntm.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'WhyUs', 'Contact'];

  const scrollTo = (label) => {
    let id = label.toLowerCase();
    if (id === 'whyus') id = 'why-us';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 transition-all duration-300 pt-4 px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-full border border-blue-500/30 shadow-lg">
        <div className="flex items-center justify-between h-16 px-6 sm:px-8">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">Code</span><span className="text-blue-600">Xa</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="relative px-3 lg:px-4 py-2 text-gray-300 font-medium text-sm lg:text-base group overflow-hidden"
                whileHover={{ color: '#00d9ff' }}
              >
                {item}
                {/* Underline animation */}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Coding Animation */}
          <motion.div
            className="hidden md:flex w-20 h-20"
            whileHover={{ scale: 1.1 }}
          >
            <Lottie 
              animationData={codingAnimation} 
              loop={true}
              className="w-full h-full"
            />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-500 hover:bg-gray-800/50 rounded-lg transition font-medium"
                whileHover={{ paddingLeft: '1.25rem' }}
              >
                {item}
              </motion.button>
            ))}
            
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Chat Bubble */}
      <motion.a
        href="https://wa.me/94750326062"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>
    </motion.nav>
  );
};
export default Navbar;
