
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-akcess-black py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/lovable-uploads/7a03b899-1e96-4a72-8c94-f129844ab234.png" alt="Akcess Labs Logo" className="h-8" />
              <span className="text-white font-bold text-xl">AKCESS LABS</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Guidelines and How-to</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Chain Sign Request</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">How to start a blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Getting Started</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Guidelines and How-to</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Quick Start Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">How to start a blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Academy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Glossary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Reference guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Design & Dev</a></li>
              <li><a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors text-sm">Marketplace</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Product Company. All Rights Reserved.
          </div>
          
          <div className="flex space-x-4">
            <div className="flex gap-2 items-center text-gray-400 text-sm">
              <a href="#" className="hover:text-akcess-yellow transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-akcess-yellow transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-akcess-yellow transition-colors">Security</a>
              <span>•</span>
              <a href="#" className="hover:text-akcess-yellow transition-colors">Sitemap</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-akcess-yellow transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
