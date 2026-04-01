import React from 'react';
import { motion } from 'framer-motion';


const BrandSection = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative w-screen h-[600px] bg-black overflow-hidden flex items-center justify-center">
      <motion.div
        className="w-full px-4 sm:px-6 md:px-0"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-9xl sm:text-[150px] md:text-[200px] lg:text-[280px] xl:text-[350px] 2xl:text-[400px] font-black leading-[0.9] text-center flex items-center justify-center gap-4">
          <motion.span
            className="text-white"
            variants={textVariant}
            style={{ textIndent: '-0.09em' }}
          >
            Code
          </motion.span>
          <motion.span
            className="text-blue-600"
            variants={textVariant}
            style={{ textIndent: '-0.09em' }}
          >
            Xa
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandSection;
