
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            About Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know my background, educational qualifications, and professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-3d card-gradient">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate B.Tech-CSE student with hands-on experience in building 
                scalable web applications. With strong communication skills and a proactive 
                approach, I thrive in collaborative environments where I can contribute 
                to innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                My goal is to become a proficient Full Stack Developer with expertise in 
                modern web technologies. I enjoy solving complex problems and continuously 
                learning new skills to enhance my development capabilities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-3d card-gradient">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-semibold">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-700">IIMT College of Engineering, Greater Noida</p>
                  <p className="text-gray-500">2022 - 2026</p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">CGPA:</span> 8/10
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-700">Relevant Coursework:</h4>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    <li>Data Structures and Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database Management Systems</li>
                    <li>Web Development</li>
                    <li>Computer Networks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* <div className="mt-12 bg-white rounded-lg p-6 border shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Father's Name:</span> Mr. Kumar
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Address:</span> Greater Noida, Uttar Pradesh, India
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Languages:</span> English, Hindi
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Nationality:</span> Indian
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
