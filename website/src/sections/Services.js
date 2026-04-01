import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaGraduationCap, FaGlobe, FaPaintBrush, FaServer, FaCogs } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaCode,
      title: 'Web App Development',
      description: 'Build modern, scalable web applications with cutting-edge technologies.',
    },
    {
      id: 2,
      icon: FaMobileAlt,
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile applications for iOS and Android.',
    },
    {
      id: 3,
      icon: FaGraduationCap,
      title: 'Assignment & Projects',
      description: 'Expert solutions for academic and professional project assignments.',
    },
    {
      id: 4,
      icon: FaGlobe,
      title: 'Business Websites',
      description: 'Custom-built professional websites tailored to your business needs.',
    },
    {
      id: 5,
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed for maximum engagement.',
    },
    {
      id: 6,
      icon: FaServer,
      title: 'API & Backend Development',
      description: 'Robust APIs and backend systems for seamless data management.',
    },
    {
      id: 7,
      icon: FaCogs,
      title: 'Custom Systems',
      description: 'Tailored solutions designed specifically for your unique business requirements.',
    },
  ];

  // Triple services for seamless infinite loop
  const scrollServices = [...services, ...services, ...services];

  return (
    <section id="services" className="relative py-10 bg-gradient-to-b from-black to-black/80 overflow-hidden scroll-mt-24">
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes autoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.66%);
          }
        }
        .auto-scroll {
          animation: autoScroll 90s linear infinite;
          will-change: transform;
          width: 300%;
        }
      `}</style>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Our </span><span className="text-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          className="flex gap-8 pb-4 hide-scrollbar auto-scroll"
          style={{
            display: 'flex',
            gap: '2rem'
          }}
        >
          {scrollServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative flex-shrink-0 w-80"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-2xl opacity-0 blur-xl transition-all duration-300"></div>

                {/* Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-blue-500/20 rounded-2xl p-8 h-full backdrop-blur-sm flex flex-col items-center text-center"
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4"
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
