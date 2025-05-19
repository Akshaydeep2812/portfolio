const Footer = () => {
  return (
    <footer className="bg-darker text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle, var(--primary-color) 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Site Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-text-muted hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Center Column - Logo/Name and Copyright */}
          <div className="flex flex-col items-center text-center">
            <a href="#home" className="text-primary text-3xl font-bold mb-4 relative group">
              <span className="glitch" data-text="Akshaydeep">Akshaydeep</span>
              <span className="block text-sm text-text-muted mt-1">Elite Developer</span>
            </a>
            <div className="mt-6 space-y-2">
              <p className="text-text-muted">© 2025 Akshaydeep Ankulugari.</p>
              <p className="text-text-muted">All Rights Reserved.</p>
            </div>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <div className="text-center">
                <div className="text-primary text-2xl font-bold">10+</div>
                <div className="text-text-muted text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-2xl font-bold">150+</div>
                <div className="text-text-muted text-xs">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact & Social */}
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-bold mb-6 text-primary">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:akshay@elitedev.com" 
                  className="text-text-muted hover:text-primary transition-colors duration-300 flex items-center justify-end"
                >
                  akshay@elitedev.com
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14155551234" 
                  className="text-text-muted hover:text-primary transition-colors duration-300 flex items-center justify-end"
                >
                  +1 (415) 555-1234
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </a>
              </li>
              <li>
                <span className="text-text-muted flex items-center justify-end">
                  San Francisco, CA
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-8 flex space-x-4">
              {[
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-card transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0">
            Designed with <span className="text-primary">♥</span> for excellence
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="#home" 
          className="bg-primary hover:bg-primary-dark text-background-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:scale-110"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
