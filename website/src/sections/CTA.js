import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailAnimation from '../assets/Email.json';
import emailjs from '@emailjs/browser';

const CTA = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('ZqCyiG0JlbBELnXre');
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [errors, setErrors] = useState({});

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

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation (optional but if provided, validate format)
    if (formData.phone.trim()) {
      if (!/^[\d\s\-+()]{7,}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      showToast('❌ Please fix the errors in the form', 'error');
      return;
    }

    setLoading(true);
    
    try {
      await emailjs.send(
        'service_143xk7d', // Service ID
        'template_ntx6a7m', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_company: formData.company,
          message: formData.message,
          to_email: 'technologiescodexa@gmail.com',
        }
      );
      
      setSuccess(true);
      setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      setErrors({});
      showToast('✅ Message sent successfully!', 'success');
      setTimeout(() => setSuccess(false), 3000);
      setLoading(false);
    } catch (error) {
      console.error('Error sending email:', error);
      setLoading(false);
      showToast('❌ Error sending message. Please try again.', 'error');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-black overflow-hidden scroll-mt-24">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg font-semibold shadow-lg ${
              toast.type === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.3 }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

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
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors focus:shadow-none ${
                        errors.name 
                          ? 'border-red-500/50 focus:border-red-500/50' 
                          : 'border-blue-500/20 focus:border-blue-500/50'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors focus:shadow-none ${
                        errors.phone 
                          ? 'border-red-500/50 focus:border-red-500/50' 
                          : 'border-blue-500/20 focus:border-blue-500/50'
                      }`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors focus:shadow-none ${
                        errors.email 
                          ? 'border-red-500/50 focus:border-red-500/50' 
                          : 'border-blue-500/20 focus:border-blue-500/50'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Company Input (Optional) */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors focus:shadow-none"
                      placeholder="Your company name"
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
                    rows="3"
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none focus:shadow-none ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500/50' 
                        : 'border-blue-500/20 focus:border-blue-500/50'
                    }`}
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
