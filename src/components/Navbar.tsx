
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-16 flex items-center justify-between bg-akcess-black sticky top-0 z-50">
      <div className="flex items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/7a03b899-1e96-4a72-8c94-f129844ab234.png" alt="Akcess Labs Logo" className="h-8" />
          <span className="text-white font-bold text-xl">AKCESS LABS</span>
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-white hover:text-akcess-yellow transition-colors">Home</a>
        <a href="#about" className="text-white hover:text-akcess-yellow transition-colors">About Us</a>
        <a href="#services" className="text-white hover:text-akcess-yellow transition-colors">Services</a>
        <a href="#faq" className="text-white hover:text-akcess-yellow transition-colors">Blog</a>
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
            <a href="#" className="text-white hover:text-akcess-yellow transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-akcess-yellow transition-colors">About Us</a>
            <a href="#services" className="text-white hover:text-akcess-yellow transition-colors">Services</a>
            <a href="#faq" className="text-white hover:text-akcess-yellow transition-colors">Blog</a>
            <a href="#contact" className="btn-primary w-full text-center">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
