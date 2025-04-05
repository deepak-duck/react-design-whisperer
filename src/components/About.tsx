
import { useEffect, useState } from 'react';

const About = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        
        // If the section is in view
        if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="about" className="bg-akcess-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl font-semibold text-akcess-yellow mb-4">About Us</h2>
            <h3 className="text-3xl font-bold mb-6">We are here to make great design accessible and also delightful for everyone</h3>
            <p className="text-gray-400 mb-6">
              It is an organization that is inspired by creativity. We add color to our initiatives while strictly adhering to the
              guidelines of web accessibility. At this point in time, design in digital experiences is above and beyond anything that we
              could have dreamed a short while back.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-akcess-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-akcess-black font-bold">01</span>
                </div>
                <h4 className="font-semibold">Founded</h4>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-akcess-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-akcess-black font-bold">50M</span>
                </div>
                <h4 className="font-semibold">monthly enrichments</h4>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-akcess-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-akcess-black font-bold">400k</span>
                </div>
                <h4 className="font-semibold">User</h4>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Team working on accessibility" 
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Our Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex gap-4 transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
                 style={{ transitionDelay: '400ms' }}>
              <div>
                <div className="w-10 h-10 bg-akcess-yellow rounded-full flex items-center justify-center">
                  <span className="text-akcess-black font-bold">01</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Team</h3>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity. We add color to our initiatives while strictly adhering to the
                  guidelines of web accessibility.
                </p>
              </div>
            </div>
            
            <div className={`flex gap-4 transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '600ms' }}>
              <div>
                <div className="w-10 h-10 bg-akcess-yellow rounded-full flex items-center justify-center">
                  <span className="text-akcess-black font-bold">02</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Board</h3>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity. We add color to our initiatives while strictly adhering to the
                  guidelines of web accessibility.
                </p>
              </div>
            </div>
            
            <div className={`flex gap-4 transition-all duration-700 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                 style={{ transitionDelay: '800ms' }}>
              <div>
                <div className="w-10 h-10 bg-akcess-yellow rounded-full flex items-center justify-center">
                  <span className="text-akcess-black font-bold">03</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Press</h3>
                <p className="text-sm text-gray-400">
                  It is an organization that is inspired by creativity. We add color to our initiatives while strictly adhering to the
                  guidelines of web accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
