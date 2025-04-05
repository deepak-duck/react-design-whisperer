
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      let currentActiveSection = "home";
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || "";
        const sectionTop = section.getBoundingClientRect().top;
        const distance = Math.abs(sectionTop);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentActiveSection = sectionId;
        }
      });
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "faq", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-16 flex items-center justify-between bg-akcess-black sticky top-0 z-50 backdrop-blur-sm bg-opacity-80 border-b border-gray-800">
      <div className="flex items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/7a03b899-1e96-4a72-8c94-f129844ab234.png" alt="Akcess Labs Logo" className="h-8" />
          <span className="text-white font-bold text-xl">AKCESS LABS</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a 
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
            className={`text-white hover:text-akcess-yellow transition-colors py-1 px-1 ${
              activeSection === link.id 
                ? "border-b-2 border-akcess-yellow text-akcess-yellow" 
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="hidden md:block">
        <a href="#contact" className="btn-primary">Contact Us</a>
      </div>
      
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-akcess-black border-t border-gray-800 p-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`text-white hover:text-akcess-yellow transition-colors py-1 ${
                  activeSection === link.id 
                    ? "border-l-2 pl-2 border-akcess-yellow text-akcess-yellow" 
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full text-center">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
