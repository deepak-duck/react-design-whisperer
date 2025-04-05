
import React from 'react';
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 text-center flex flex-col items-center">
      <AnimationWrapper type="slide-up" className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span>Everyone Should Be Able To </span>
          <motion.span 
            className="text-akcess-yellow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Enjoy
          </motion.span>
          <br />
          <span>Your </span>
          <motion.span 
            className="text-akcess-yellow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Website
          </motion.span>
          <span>, Regardless Of Ability!</span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 mb-10 max-w-3xl mx-auto">
          By Streamlining Accessibility, Akcessible Solutions Empowers Businesses To Take The 
          Inclusive Approach To Comply With The ADA & Adhere To WCAG!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Demo
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Hero;
