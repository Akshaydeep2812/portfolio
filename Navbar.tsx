import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-darker py-2 shadow-lg shadow-primary/10' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-primary text-xl md:text-2xl font-bold relative overflow-hidden group"
        >
          <span className="glitch" data-text="Akshaydeep Ankulugari">Akshaydeep Ankulugari</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'certifications', label: 'Certifications' },
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`relative overflow-hidden group ${
                activeSection === item.id ? 'text-primary' : 'text-white'
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Contact Me
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute h-0.5 w-full bg-primary transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-full bg-primary transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'top-2 opacity-100'
              }`}
            ></span>
            <span 
              className={`absolute h-0.5 w-full bg-primary transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`}
            ></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-darker transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'contact', label: 'Contact Me' },
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`text-white hover:text-primary transition-colors ${
                activeSection === item.id ? 'text-primary' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
