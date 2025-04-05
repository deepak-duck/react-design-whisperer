
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import AnimationWrapper from './AnimationWrapper';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="bg-akcess-black py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimationWrapper type="fade" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Make Your Website <span className="text-akcess-yellow">Accessible?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team and let's create a more inclusive web experience together.
          </p>
        </AnimationWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimationWrapper type="slide-right">
            <motion.div 
              className="rounded-xl border-2 border-akcess-yellow/40 p-8 bg-akcess-gray/30 backdrop-blur-sm"
              whileHover={{ boxShadow: "0 0 30px rgba(229, 255, 84, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-akcess-yellow">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-akcess-black border-2 border-akcess-yellow/30 rounded-md p-4 focus:border-akcess-yellow focus:ring-1 focus:ring-akcess-yellow focus:outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full bg-akcess-black border-2 border-akcess-yellow/30 rounded-md p-4 focus:border-akcess-yellow focus:ring-1 focus:ring-akcess-yellow focus:outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message"
                    className="w-full bg-akcess-black border-2 border-akcess-yellow/30 rounded-md p-4 focus:border-akcess-yellow focus:ring-1 focus:ring-akcess-yellow focus:outline-none transition-all"
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="bg-akcess-yellow text-akcess-black py-4 px-8 rounded-md hover:bg-opacity-90 transition-colors w-full md:w-auto font-medium text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </AnimationWrapper>
          
          <AnimationWrapper type="slide-up" className="flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="font-semibold mb-4 text-xl text-akcess-yellow">Office Address</h3>
              <p className="text-gray-300 text-lg">
                941, Street P, Block F<br/>
                Central business park<br/>
                Ohio
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="font-semibold mb-4 text-xl text-akcess-yellow">Contact Information</h3>
              <p className="text-gray-300 text-lg">
                +1 332 552 3215<br/>
                hello@akcesslabs.com
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-xl text-akcess-yellow">Office Hours</h3>
              <p className="text-gray-300 text-lg">
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 2:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
