
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database } from 'lucide-react';
import sunnyImage from "./sunny.jpg";

const Hero = () => {
  return (
    
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
        <div className='flex flex-col md:flex-row-reverse items-center  mt-10 mb-5 gap-0'>
      <div className="w-full  md:w-auto flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-300/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <span className="text-7xl font-bold text-white">AK</span> */}
                <img src={sunnyImage} alt='sunny'/>
              </div>
            </div>
          </div>
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-gradient absolute top-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full opacity-20 blur-3xl"></div>
        <div className="animated-gradient absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-3xl"></div>
      </div> */}
      
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 ml-10">
          <div className="w-full md:w-3/5 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-heading">Anjani Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Aspiring Full Stack Web Developer
            </h2>
            
            <div className="mb-8 space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                I specialize in building scalable web applications using the MERN stack,
                with a strong passion for web development and Exploring IOT technologies.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500">
                <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                  <Code size={16} className="text-primary" /> MERN Stack
                </span>
                <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border">
                <Code size={16} className="text-primary" /> Web Development
                </span>
              </div>
            </div>
            
            <div className="flex flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
               
                <a href="#projects">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
      
        </div>
        </div>  
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
