import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailAnimation from '../assets/Email.json';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      detail: 'technologiescodexa@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      detail: '+94 75 032 6062',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      detail: 'Matara, Sri Lanka',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-5"
          animate={{ y: [0, -50, 0] }}
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
            <span className="text-white">Get In </span>
            <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your next project? We'd love to hear from you. Reach out today!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="space-y-12 mb-16">
          {/* Top Row: Animation & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Email Animation - Left */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96">
                <Lottie
                  animationData={emailAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Contact Form - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm h-full"
              >
                <div className="grid grid-cols-1 gap-6 mb-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors focus:shadow-none"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors focus:shadow-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none focus:shadow-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Success Message */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading || success}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 disabled:opacity-50"
                >
                  <FaPaperPlane className="text-lg" />
                  {loading ? 'Sending...' : success ? 'Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Bottom Row: Contact Information - Horizontal Layout */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  
                  {/* Detail */}
                  <span className="text-gray-300 text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                    {info.detail}
                  </span>
                  
                  {/* Separator - not on last item */}
                  {idx < contactInfo.length - 1 && (
                    <div className="h-6 w-px bg-gradient-to-b from-blue-600/40 to-cyan-600/40 mx-2" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default CTA;
