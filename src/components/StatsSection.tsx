
import React from 'react';
import { SpotlightCard } from './ui/spotlight-card';
import CountUp from './ui/count-up';
import AnimationWrapper from './AnimationWrapper';

const StatsSection = () => {
  const stats = [
    { number: 98, suffix: "%", title: "Accessibility Score" },
    { number: 5000, suffix: "+", title: "Projects Completed" },
    { number: 24, suffix: "/7", title: "Customer Support" },
    { number: 100, suffix: "%", title: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 bg-akcess-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimationWrapper type="fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-akcess-yellow">Impact</span> By Numbers
          </h2>
        </AnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimationWrapper key={index} delay={index * 0.2} type="scale">
              <SpotlightCard className="p-6 text-center">
                <div className="py-4">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold text-akcess-yellow mb-2"
                  />
                  <p className="text-gray-300 text-lg">{stat.title}</p>
                </div>
              </SpotlightCard>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
