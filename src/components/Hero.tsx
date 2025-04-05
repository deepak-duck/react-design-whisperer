
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 text-center flex flex-col items-center">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span>Everyone Should Be Able To </span>
          <span className="text-akcess-yellow">Enjoy</span>
          <br />
          <span>Your </span>
          <span className="text-akcess-yellow">Website</span>
          <span>, Regardless Of Ability!</span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 mb-10 max-w-3xl mx-auto">
          By Streamlining Accessibility, Akcessible Solutions Empowers Businesses To Take The 
          Inclusive Approach To Comply With The ADA & Adhere To WCAG!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">Request a Demo</a>
          <a href="#contact" className="btn-outline">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
