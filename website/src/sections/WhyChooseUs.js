import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaBolt, FaLock, FaRocket, FaTrophy, FaUsers, FaChartLine, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: FaBrain,
      title: 'AI & Innovation',
      description: 'Cutting-edge solutions powered by AI and machine learning for intelligent automation.',
    },
    {
      id: 2,
      icon: FaBolt,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid deployments without compromising quality.',
    },
    {
      id: 3,
      icon: FaLock,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
    },
    {
      id: 4,
      icon: FaRocket,
      title: 'Scalable Solutions',
      description: 'Cloud-native architecture designed to scale from startup to enterprise.',
    },
  ];

  const benefits = [
    { icon: FaTrophy, label: '15+', sublabel: 'Industry Awards' },
    { icon: FaUsers, label: '10+', sublabel: 'Happy Clients' },
    { icon: FaChartLine, label: '100%', sublabel: 'Project Success' },
    { icon: FaHeadset, label: '24/7', sublabel: 'Support Team' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="why-us" className="relative py-10 md:py-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 right-20 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-blue-500">Codexa?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver more than code. We deliver transformation, innovation, and measurable results.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />

                {/* Card */}
                <motion.div
                  className="relative h-full bg-gradient-to-br from-gray-900/60 to-black/60 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="text-white text-xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

                  {/* Bottom Accent */}
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/40 to-black/40 border border-blue-500/20 rounded-xl p-6 text-center backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-300 h-full">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex w-12 h-12 bg-blue-600/20 border border-blue-500/50 rounded-lg items-center justify-center mb-3"
                      whileHover={{ scale: 1.15 }}
                    >
                      <BenefitIcon className="text-blue-400 text-lg" />
                    </motion.div>
                    <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">
                      {benefit.label}
                    </p>
                    <p className="text-gray-400 text-sm">{benefit.sublabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        
      </div>
    </section>
  );
};

export default WhyChooseUs;
