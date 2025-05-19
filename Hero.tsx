import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on load
    const elements = [
      { ref: titleRef, delay: 0 },
      { ref: subtitleRef, delay: 300 },
      { ref: descriptionRef, delay: 600 },
      { ref: buttonsRef, delay: 900 },
      { ref: profileRef, delay: 200 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100');
          ref.current?.classList.remove('opacity-0');
          
          if (ref === titleRef || ref === subtitleRef) {
            ref.current?.classList.add('translate-y-0');
            ref.current?.classList.remove('-translate-y-10');
          } else if (ref === descriptionRef || ref === buttonsRef) {
            ref.current?.classList.add('translate-y-0');
            ref.current?.classList.remove('translate-y-10');
          } else if (ref === profileRef) {
            ref.current?.classList.add('scale-100');
            ref.current?.classList.remove('scale-90');
          }
        }, delay);
      }
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-darker relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--primary-color) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left content */}
        <div className="lg:w-3/5 text-center lg:text-left mb-12 lg:mb-0">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 -translate-y-10 transition-all duration-700 ease-out"
          >
            <span className="text-white">I'm </span>
            <span className="text-primary relative">
              Akshaydeep
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 opacity-0 -translate-y-10 transition-all duration-700 ease-out delay-300"
          >
            <span className="text-white">Computer Science </span>
            <span className="text-primary">Student</span>
          </p>
          
          <p 
            ref={descriptionRef}
            className="text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 mb-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-600"
          >
            Passionate about Computer Science, I aim to leverage my skills to contribute to organizational goals while
            continuously learning and adapting. Committed to driving innovation and growth through technical expertise.
          </p>
          
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-900"
          >
            <a 
              href="#projects" 
              className="btn-primary group"
            >
              <span className="relative z-10">View My Work</span>
            </a>
            <a 
              href="#contact" 
              className="btn-outline group"
            >
              <span className="relative z-10">Let's Talk</span>
            </a>
          </div>
        </div>
        
        {/* Right content - Profile */}
        <div 
          ref={profileRef}
          className="lg:w-2/5 flex justify-center opacity-0 scale-90 transition-all duration-700 ease-out"
        >
          <div className="relative">
            {/* Hexagon frame */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse-yellow"></div>
              <div className="absolute inset-2 bg-card rounded-full overflow-hidden border-2 border-primary">
                {/* Profile image or placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-card text-primary text-6xl font-bold">
                  AA
                </div>
              </div>
              
              {/* Orbiting tech icons */}
              {[0, 60, 120, 180, 240, 300].map((degree, index) => {
                const icons = ['⚛️', '🐍', '☕', '🌐', '🧮', '📊'];
                const delay = index * 0.5;
                return (
                  <div 
                    key={index}
                    className="absolute w-12 h-12 rounded-full bg-card flex items-center justify-center text-2xl shadow-lg border border-primary/30"
                    style={{
                      top: `calc(50% - 24px + ${Math.sin(degree * Math.PI / 180) * 150}px)`,
                      left: `calc(50% - 24px + ${Math.cos(degree * Math.PI / 180) * 150}px)`,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${delay}s`
                    }}
                  >
                    {icons[index]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
