
import React from 'react';
import { Card } from '@/components/ui/card';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Coding Problem Solver",
      description: "Solved over 150 coding questions across various platforms, demonstrating strong algorithmic and problem-solving abilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
      )
    },
    {
      title: "Hackathon Participant",
      description: "Participated in the 2024 Hackathon organized by IIMT Group of Engineering, where I collaborated with a team to develop innovative solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      )
    }
  ];

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Achievements & Awards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognitions and accomplishments throughout my academic and professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-3d card-gradient p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 border shadow-sm text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Continuing the Journey</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm constantly working on improving my skills and taking on new challenges.
            Looking forward to more achievements and contributions in the field of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
