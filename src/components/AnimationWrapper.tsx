
import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimationType = 'fade' | 'slide-up' | 'slide-right' | 'scale';

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  type?: AnimationType;
  delay?: number;
}

const AnimationWrapper = ({ 
  children, 
  className = '',
  type = 'fade',
  delay = 0 
}: AnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getAnimationVariants = () => {
    switch(type) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.7, delay } }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay } }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay } }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.7, delay } }
        };
    }
  };

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getAnimationVariants()}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationWrapper;
