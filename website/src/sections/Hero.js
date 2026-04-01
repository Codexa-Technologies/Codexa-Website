import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { 
  FaReact, FaNode, FaPython, FaDatabase, FaAws, FaDocker,
  FaGit, FaJsSquare, FaJava, FaLinux, FaGithub, FaCss3,
  FaHtml5, FaAngular, FaVuejs, FaPhp, FaNpm, FaYarn,
  FaBitbucket, FaGitlab, FaServer, FaCode, FaCogs, FaMobile,
  FaSass, FaTerminal, FaWindows, FaApple, FaAndroid, FaFire,
  FaLightbulb, FaChartBar, FaRobot, FaCloud, FaLock, FaKey,
  FaShieldAlt, FaConnectdevelop, FaLeaf, FaWifi, FaMarkdown,
  FaMicrosoft, FaGoogle, FaStripe, FaPaypal,
  FaRust, FaBootstrap, FaWrench, FaPalette,
  FaBolt, FaSync
} from 'react-icons/fa';

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [heroVideo, setHeroVideo] = useState(null);

  // Tech stack for carousel - 50+ icons
  const techStack = [
    { icon: FaReact, label: 'React', color: '#61DAFB' },
    { icon: FaNode, label: 'Node.js', color: '#68A063' },
    { icon: FaPython, label: 'Python', color: '#3776AB' },
    { icon: FaDatabase, label: 'Database', color: '#336791' },
    { icon: FaAws, label: 'AWS', color: '#FF9900' },
    { icon: FaDocker, label: 'Docker', color: '#2496ED' },
    { icon: FaGit, label: 'Git', color: '#F1502F' },
    { icon: FaJsSquare, label: 'JavaScript', color: '#F7DF1E' },
    { icon: FaJava, label: 'Java', color: '#007396' },
    { icon: FaLinux, label: 'Linux', color: '#FCC624' },
    { icon: FaGithub, label: 'GitHub', color: '#FFFFFF' },
    { icon: FaCss3, label: 'CSS3', color: '#1572B6' },
    { icon: FaHtml5, label: 'HTML5', color: '#E34C26' },
    { icon: FaAngular, label: 'Angular', color: '#DD0031' },
    { icon: FaVuejs, label: 'Vue.js', color: '#4FC08D' },
    { icon: FaPhp, label: 'PHP', color: '#777BB4' },
    { icon: FaNpm, label: 'npm', color: '#CB3837' },
    { icon: FaYarn, label: 'Yarn', color: '#2C8EBB' },
    { icon: FaBitbucket, label: 'Bitbucket', color: '#0052CC' },
    { icon: FaGitlab, label: 'GitLab', color: '#FCA121' },
    { icon: FaServer, label: 'Server', color: '#4B8BBE' },
    { icon: FaCode, label: 'Code', color: '#7F8C8D' },
    { icon: FaCogs, label: 'Services', color: '#95A5A6' },
    { icon: FaMobile, label: 'Mobile', color: '#555555' },
    { icon: FaSass, label: 'Sass', color: '#CC6699' },
    { icon: FaTerminal, label: 'Terminal', color: '#000000' },
    { icon: FaWindows, label: 'Windows', color: '#0078D4' },
    { icon: FaApple, label: 'macOS', color: '#555555' },
    { icon: FaAndroid, label: 'Android', color: '#3DDC84' },
    { icon: FaFire, label: 'Firebase', color: '#FFCA28' },
    { icon: FaLightbulb, label: 'Innovation', color: '#F39C12' },
    { icon: FaChartBar, label: 'Analytics', color: '#3498DB' },
    { icon: FaRobot, label: 'AI/ML', color: '#9B59B6' },
    { icon: FaCloud, label: 'Cloud', color: '#64B5F6' },
    { icon: FaLock, label: 'Security', color: '#E74C3C' },
    { icon: FaKey, label: 'Auth', color: '#C0392B' },
    { icon: FaShieldAlt, label: 'Protection', color: '#27AE60' },
    { icon: FaConnectdevelop, label: 'API', color: '#16A085' },
    { icon: FaLeaf, label: 'Express', color: '#000000' },
    { icon: FaWifi, label: 'WebSocket', color: '#4ECDC4' },
    { icon: FaMarkdown, label: 'Markdown', color: '#083FA1' },
    { icon: FaMicrosoft, label: 'Azure', color: '#0078D4' },
    { icon: FaGoogle, label: 'Google Cloud', color: '#4285F4' },
    { icon: FaStripe, label: 'Stripe', color: '#008CDD' },
    { icon: FaPaypal, label: 'PayPal', color: '#003087' },
    { icon: FaRust, label: 'Rust', color: '#CE422B' },
    { icon: FaBootstrap, label: 'Bootstrap', color: '#7952B3' },
    { icon: FaWrench, label: 'Tools', color: '#FF6B6B' },
    { icon: FaBolt, label: 'Performance', color: '#FFD700' },
    { icon: FaPalette, label: 'Design', color: '#FF69B4' },
    { icon: FaSync, label: 'Integration', color: '#1ABC9C' },
  ];

  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  // Auto-swipe tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [techStack.length]);

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

      {/* Tech Stack Carousel - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20">
        <motion.div
          className="w-16 h-16 flex items-center justify-center bg-black rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Tech Icon Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTechIndex}
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(techStack[currentTechIndex].icon, {
                className: 'text-2xl',
                style: { color: techStack[currentTechIndex].color }
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
