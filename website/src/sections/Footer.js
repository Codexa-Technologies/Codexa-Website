import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const footerLinks = {
    Services: ['Web App Development', 'Mobile App Development', 'UI/UX Design', 'API & Backend Development'],
    Solutions: ['Assignment & Projects', 'Business Websites', 'Custom Systems', 'Cloud Integration'],
  };

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="relative bg-black border-t border-blue-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 pb-8 md:pb-12">
          {/* Links, Services, Solutions & Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand + Social Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-white">Code</span><span className="text-blue-500">Xa</span>
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Innovative digital solutions for your business.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-2 pt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-8 h-8 flex items-center justify-center"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                      {/* Button */}
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-900/60 to-black/60 border border-blue-500/30 group-hover:border-blue-500/60 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-all duration-300 backdrop-blur-sm">
                        <IconComponent className="text-sm" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.Services.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions Column */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-lg mb-6">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.Solutions.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              <h4 className="text-white font-bold text-lg">Contact</h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✉</span>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a href="mailto:technologiescodexa@gmail.com" className="text-white text-xs hover:text-blue-400 transition-colors break-all">
                      technologiescodexa@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">📞</span>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a href="tel:+94750326062" className="text-white text-xs hover:text-blue-400 transition-colors">
                      +94 75 032 6062
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">📍</span>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white text-xs">Matara, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-500/20 pt-2">
            {/* Footer Bottom */}
            <motion.div
              className="flex flex-col justify-center items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-500 text-sm text-center">
                <p>&copy; {currentYear} Codexa Technologies. All rights reserved.</p>
                <p className="text-xs text-gray-600 mt-1">Quality • Innovation • Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
