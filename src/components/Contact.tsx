
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactInfo = ({ 
  icon, 
  title, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  href?: string; 
}) => (
  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
    <div className="p-3 bg-primary/10 rounded-md text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      {href ? (
        <a 
          href={href} 
          className="text-gray-800 font-medium hover:text-primary transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-800 font-medium">{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-gradient absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full opacity-10 blur-3xl"></div>
        <div className="animated-gradient absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="card-gradient p-6 flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-2">
              <ContactInfo 
                icon={<Phone size={20} />} 
                title="Phone" 
                value="+91 9876543210" 
                href="tel:+919876543210"
              />
              
              <ContactInfo 
                icon={<Mail size={20} />} 
                title="Email" 
                value="anjani.kumar@example.com" 
                href="mailto:anjani.kumar@example.com"
              />
              
              <ContactInfo 
                icon={<Linkedin size={20} />} 
                title="LinkedIn" 
                value="anjani-kumar" 
                href="https://linkedin.com/in/anjani-kumar"
              />
              
              <ContactInfo 
                icon={<Github size={20} />} 
                title="GitHub" 
                value="anjani-kumar" 
                href="https://github.com/anjani-kumar"
              />
              
              <ContactInfo 
                icon={<MapPin size={20} />} 
                title="Location" 
                value="Greater Noida, Uttar Pradesh, India"
              />
            </div>
            
            <div className="mt-8">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="mailto:anjani.kumar@example.com">Send Email</a>
              </Button>
            </div>
          </Card>
          
          <div className="flex-1">
            <Card className="card-gradient p-6 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
