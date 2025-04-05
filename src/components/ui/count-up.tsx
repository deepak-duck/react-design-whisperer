
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  start?: number;
  decimal?: number;
}

export const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  decimal = 0
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

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

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    countRef.current = start;
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const timePassed = Date.now() - startTime;
      const progress = Math.min(timePassed / duration, 1);
      
      const currentCount = start + progress * (end - start);
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, start, duration, isVisible]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimal);
  };

  return (
    <div ref={counterRef} className={cn("font-bold", className)}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
};

export default CountUp;
