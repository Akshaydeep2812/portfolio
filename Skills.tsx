import { useState, useEffect } from 'react';
import Section from '../layout/Section';

interface SkillCardProps {
  icon: string;
  name: string;
  level?: number;
  description?: string;
}

const SkillCard = ({ icon, name, level = 75, description }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`skill-${name.replace(/\s+/g, '-')}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [name]);

  return (
    <div 
      id={`skill-${name.replace(/\s+/g, '-')}`}
      className="bg-card rounded-lg overflow-hidden card-hover group relative"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-primary text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
          <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">{name}</h4>
        </div>
        
        {level && (
          <div className="w-full skill-bar mb-3">
            <div 
              className="skill-progress"
              style={{ 
                width: isVisible ? `${level}%` : '0%',
                transition: isVisible ? 'width 1.5s ease-in-out' : 'none'
              }}
            ></div>
          </div>
        )}
        
        {description && (
          <p className="text-text-muted text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
      
      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      ></div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { 
      icon: "🐍", 
      name: "Python", 
      level: 85,
      description: "Proficient in Python programming with focus on AI and ML applications"
    },
    { 
      icon: "☕", 
      name: "Java", 
      level: 80,
      description: "Strong understanding of Java and object-oriented programming principles"
    },
    { 
      icon: "🧮", 
      name: "Data Structures & Algorithms", 
      level: 78,
      description: "Solid foundation in data structures and algorithms through Java"
    },
    { 
      icon: "🤖", 
      name: "AI & ML Basics", 
      level: 75,
      description: "Understanding of fundamental AI and machine learning concepts"
    },
    { 
      icon: "🌐", 
      name: "HTML, CSS, JavaScript", 
      level: 82,
      description: "Web development skills for creating responsive interfaces"
    },
    { 
      icon: "⚛️", 
      name: "React.js", 
      level: 75,
      description: "Experience with React.js for building interactive user interfaces"
    },
    { 
      icon: "🗄️", 
      name: "MySQL", 
      level: 70,
      description: "Knowledge of relational database management systems"
    },
    { 
      icon: "📊", 
      name: "MongoDB", 
      level: 65,
      description: "Experience with NoSQL database solutions"
    }
  ];

  const softSkills = [
    { 
      icon: "⏱️", 
      name: "Time Management", 
      description: "Ability to prioritize tasks efficiently and meet deadlines consistently"
    },
    { 
      icon: "💬", 
      name: "Communication", 
      description: "Effective communication of complex technical concepts"
    },
    { 
      icon: "🔄", 
      name: "Flexibility", 
      description: "Adaptable to changing requirements and new technologies"
    },
    { 
      icon: "👂", 
      name: "Active Listening", 
      description: "Attentive to details and requirements in collaborative environments"
    }
  ];

  return (
    <Section id="skills" title="My Skills" bgColor="bg-dark" withPattern={true}>
      <div className="space-y-16">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white relative inline-block">
            Soft Skills
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 text-center card-hover group relative overflow-hidden"
              >
                <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2">{skill.name}</h4>
                <p className="text-text-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Description */}
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300">
          <p className="text-text-muted mb-4">
            My technical proficiency spans multiple domains within computer science, allowing me to approach problems from various perspectives. 
            In programming, I am well-versed in <span className="text-primary font-semibold">Python and Java</span>, with a strong understanding of 
            object-oriented programming principles that enable me to create efficient and maintainable code.
          </p>
          <p className="text-text-muted mb-4">
            In web development, I have cultivated skills in <span className="text-primary font-semibold">HTML, CSS, JavaScript, and React.js</span>, 
            enabling me to create responsive and interactive user interfaces that enhance user experience. My understanding of database technologies 
            includes both relational databases like <span className="text-primary font-semibold">MySQL</span> and NoSQL solutions such as <span className="text-primary font-semibold">MongoDB</span>.
          </p>
          <p className="text-text-muted">
            Beyond technical abilities, I have developed a range of professional skills that enhance my effectiveness in collaborative environments. 
            My <span className="text-primary font-semibold">time management</span> capabilities allow me to prioritize tasks efficiently and meet deadlines consistently. 
            <span className="text-primary font-semibold"> Effective communication</span> is central to my professional approach, enabling me to articulate complex technical concepts clearly.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
