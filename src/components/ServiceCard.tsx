
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ title, description, features, delay = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card-hover bg-akcess-gray rounded-lg p-6 flex flex-col h-full animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      
      <div className="flex-grow">
        {features.map((feature, index) => (
          <p key={index} className="text-xs text-gray-400 mb-1">{feature}</p>
        ))}
      </div>
      
      <div className="mt-6">
        <a 
          href="#contact" 
          className={`inline-block py-2 px-4 rounded-md text-sm transition-all ${
            isHovered ? 'bg-akcess-yellow text-akcess-black' : 'bg-transparent text-akcess-yellow border border-akcess-yellow'
          }`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
