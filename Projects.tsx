import { useState } from 'react';
import Section from '../layout/Section';

interface ProjectProps {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const ProjectCard = ({ title, year, description, technologies, image, link }: ProjectProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-card rounded-lg overflow-hidden card-hover group">
      {/* Project Image */}
      <div className="bg-darker aspect-video relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background-dark to-card">
            <div className="text-primary text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              {title.substring(0, 2).toUpperCase()}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
          <span className="text-primary font-medium">{year}</span>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-darker text-primary text-xs px-3 py-1 rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Description */}
        <div className={`${expanded ? '' : 'line-clamp-3'} text-text-muted mb-4 transition-all duration-500`}>
          {description}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:text-white transition-colors duration-300 font-medium flex items-center"
          >
            <span>{expanded ? 'Show Less' : 'View Details'}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="flex gap-3">
            <a 
              href={link || "#"} 
              className="text-text-muted hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="View project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-text-muted hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="View code"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Chatbot Using Transformers",
      year: "2023",
      description: "Developed an AI chatbot using BERT, achieving a 95% accuracy rate in understanding user intent and reducing the workload for human agents by automating responses to 80% of routine inquiries.",
      technologies: ["Python", "BERT", "NLP", "Machine Learning"],
      link: "#"
    },
    {
      title: "AI-Powered Cognitive Digital Twin for Blockchain-Driven Real Estate Valuation",
      year: "2025",
      description: "The project aims to create an intelligent digital replica of real estate assets using AI to simulate behavior, usage, and market trends. By integrating blockchain, it ensures secure, transparent, and tamper-proof property data, enabling accurate and real-time valuation for buyers, sellers, and investors.",
      technologies: ["AI", "Blockchain", "Digital Twin", "Real Estate"],
      link: "#"
    }
  ];

  return (
    <Section id="projects" title="Featured Projects" bgColor="bg-darker" withPattern={true}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            year={project.year}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
