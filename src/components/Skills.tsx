
import React from 'react';
import { Card } from '@/components/ui/card';

const SkillCard = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode; 
}) => (
  <Card className="card-3d card-gradient p-6">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-md text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-white px-3 py-1 rounded-full text-sm border border-gray-100 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-gradient absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of my technical and soft skills that I've developed over the years.
          </p>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <SkillCard 
              title="Programming Languages" 
              skills={["C/C++", "JavaScript", "TypeScript", "Python", "HTML", "CSS"]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>}
            />
            
            <SkillCard 
              title="Developer Tools" 
              skills={["VS Code", "Git", "GitHub", "Postman"]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" /><path d="M6 11v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>}
            />
            
            <SkillCard 
              title="Frameworks & Libraries" 
              skills={["React.js", "Next.js", "Express.js", "Node.js", "TailwindCSS"]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" /></svg>}
            />
            
            <SkillCard 
              title="Databases" 
              skills={["MongoDB", "SQL"]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>}
            />
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Soft Skills</h3>
            <Card className="card-gradient p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  "Problem Solving", "Decision Making", "Public Speaking", 
                  "Leadership", "Quick Learning"
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg text-center shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20"
                  >
                    <p className="font-medium text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
