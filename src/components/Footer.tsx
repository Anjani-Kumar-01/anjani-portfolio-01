
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary">Anjani Kumar</a>
            <p className="text-gray-600 mt-2">
              Aspiring Full Stack Web Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/anjani-kumar-01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anjani-kumar-683ba725a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:anjanikumar70157@gmail.com"
                className="p-2 rounded-full text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Anjani Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
