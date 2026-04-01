import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import aboutAnimation from '../assets/About.json';
import { Code, Palette, Cloud } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert development across all modern technology stacks and frameworks'
    },
    {
      icon: Palette,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed for your unique business needs'
    },
    {
      icon: Cloud,
      title: 'Deployment & Support',
      description: 'Comprehensive deployment and ongoing technical support'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-black to-blue-900/10 overflow-hidden scroll-mt-24">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
                <span className="text-white">About </span>
                <span className="text-blue-500">Codexa</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                Driven by Innovation, Built with Technology
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Codexa Technologies is a modern software company with expertise across all technology stacks and platforms. We deliver innovative solutions that transform businesses and empower teams to achieve their goals.
            </p>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors duration-300">
                    <feature.icon size={16} className="text-blue-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20"
            >
              <div>
                <p className="text-3xl font-bold text-blue-500 text-center">15+</p>
                <p className="text-gray-400 text-sm text-center">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500 text-center">10+</p>
                <p className="text-gray-400 text-sm text-center">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-500 text-center">1+</p>
                <p className="text-gray-400 text-sm text-center">Years Active</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full h-full">
              <Lottie
                animationData={aboutAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
