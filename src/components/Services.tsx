
import ServiceCard from './ServiceCard';

const Services = () => {
  const serviceCards = [
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
    {
      title: "Accessibility Testing",
      description: "Accessibility audit and testing service that evaluates accessibility and compliance levels of your digital solutions.",
      features: [
        "Experience in WCAG 2.0, WCAG 2.1, WCAG 2.2, Section 508, ADA, BITV, RGAA, EN 301 549, EAA",
      ]
    },
  ];
  
  return (
    <section id="services" className="bg-akcess-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center animate-fade-in">Services We Offer</h2>
        <p className="text-gray-400 text-center mb-12 animate-fade-in">
          A good reason for kids in training can stay late for dessert
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <ServiceCard 
              key={index} 
              title={card.title} 
              description={card.description} 
              features={card.features} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
