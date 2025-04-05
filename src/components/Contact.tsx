
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

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
    <section id="contact" className="bg-akcess-yellow text-akcess-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white bg-opacity-20 border border-akcess-black border-opacity-20 rounded-md p-3"
                  required
                />
              </div>
              
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full bg-white bg-opacity-20 border border-akcess-black border-opacity-20 rounded-md p-3"
                  required
                />
              </div>
              
              <div className="mb-6">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message"
                  className="w-full bg-white bg-opacity-20 border border-akcess-black border-opacity-20 rounded-md p-3"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-akcess-black text-white py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors"
              >
                Submit Form
              </button>
            </form>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-sm">
                941, Street P, Block F<br/>
                Central business park<br/>
                Ohio
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm">
                +1 332 552 3215<br/>
                hello@akcesslabs.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
