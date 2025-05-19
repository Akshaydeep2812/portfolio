import Section from '../layout/Section';

interface CertificationProps {
  title: string;
  provider: string;
  date?: string;
  logo: string;
  credential?: string;
  skills?: string[];
}

const CertificationCard = ({ title, provider, date, logo, credential, skills }: CertificationProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden card-hover group relative">
      <div className="p-6 flex flex-col md:flex-row gap-4">
        <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
          <div className="text-5xl">{logo}</div>
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-1">{title}</h4>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
            <div className="text-primary font-medium">{provider}</div>
            {date && <div className="text-text-muted text-sm">{date}</div>}
          </div>
          
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-darker text-primary text-xs px-3 py-1 rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {credential && (
            <a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-white transition-colors duration-300 text-sm font-medium mt-2"
            >
              <span>Verify Credential</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
        
        {/* Badge decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[50%] rotate-45 bg-primary text-black text-xs font-bold py-1 px-6 group-hover:bg-white group-hover:text-primary transition-colors duration-300">
            VERIFIED
          </div>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "B2 Cambridge Empowerment Certificate",
      provider: "Cambridge",
      logo: "🎓",
      skills: ["English", "Communication"]
    },
    {
      title: "Cloud Foundation",
      provider: "AWS Academy",
      logo: "☁️",
      skills: ["Cloud Computing", "AWS"]
    },
    {
      title: "Machine Learning Foundations",
      provider: "AWS Academy",
      logo: "🤖",
      skills: ["Machine Learning", "AI"]
    },
    {
      title: "Java Programming: Arrays, Lists and Structured data",
      provider: "Coursera",
      date: "May 31, 2023",
      logo: "☕",
      skills: ["Java", "Data Structures"]
    },
    {
      title: "Introduction to Relational Database and SQL",
      provider: "Coursera",
      date: "November 24, 2022",
      logo: "🗄️",
      skills: ["SQL", "Databases"]
    }
  ];

  return (
    <Section id="certifications" title="Certifications and Achievements" bgColor="bg-darker" withPattern={true}>
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-text-muted text-center">
          My commitment to continuous learning is evidenced by the professional certifications I have earned throughout my academic journey. 
          Each certification represents not just the acquisition of specific knowledge, but also demonstrates my dedication to professional growth 
          and staying current with evolving technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard 
            key={index}
            title={cert.title}
            provider={cert.provider}
            date={cert.date}
            logo={cert.logo}
            skills={cert.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
