import { type ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
  titleColor?: string;
  withPattern?: boolean;
}

const Section = ({ 
  id, 
  title, 
  children, 
  className = '', 
  bgColor = 'bg-dark', 
  titleColor = 'text-primary',
  withPattern = false
}: SectionProps) => {
  return (
    <section id={id} className={`py-20 ${bgColor} ${className} relative overflow-hidden`}>
      {withPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: 'radial-gradient(circle, var(--primary-color) 1px, transparent 1px)',
                 backgroundSize: '30px 30px'
               }}>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold mb-16 ${titleColor}`}>
          <span className="relative">
            {title}
            <span className="absolute -bottom-4 left-0 w-16 h-1 bg-primary"></span>
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
