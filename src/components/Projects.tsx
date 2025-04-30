
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ArrowUpRight, GithubIcon } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <Card className="card-3d card-gradient overflow-hidden">
    <div className="h-48 bg-purple-100 flex items-center justify-center">
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="p-4 text-center">
          <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
          <p className="text-sm text-gray-500">Web Application</p>
        </div>
      )}
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="bg-white">
            {tech}
          </Badge>
        ))}
      </div>
      
      <div className="flex gap-3">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild size="sm" className="gap-2 bg-primary hover:bg-primary/90">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight size={16} />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "MyTutorMatch",
      description: "A platform that connects students with qualified tutors based on subject requirements. Implemented user authentication, profile management, and a real-time messaging system.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "https://www.mytutormatch.site/"
    },
    {
      title: "Study Nation",
      description: "An e-learning platform that offers courses and study materials for students. Includes features such as interactive quizzes, progress tracking, and certificate generation.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-gradient absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing my web development work and the technologies I've used.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
