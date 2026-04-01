import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [heroVideo, setHeroVideo] = useState(null);

  useEffect(() => {
    // Try to import video from assets, fallback to gradient if not available
    try {
      const video = require('../assets/Hero.mp4');
      setHeroVideo(video);
    } catch {
      setVideoError(true);
    }
  }, []); // Run only once on mount

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Video Background */}
      {heroVideo && !videoError ? (
        <>
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            onError={() => setVideoError(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </motion.video>
          
          {/* Dark Overlay for Video */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </>
      ) : (
        /* Fallback Gradient Background */
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white">Engineering Digital</span>
              <br />
              <span className="text-blue-500">
                Transformation with Intelligence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-4 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We build scalable, AI-powered solutions that drive innovation and business growth. Transform your enterprise with cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                onClick={() => scrollTo('services')}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 text-lg whitespace-nowrap"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 border-2 border-gray-400 text-white rounded-xl font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us <Play size={18} />
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>10+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
