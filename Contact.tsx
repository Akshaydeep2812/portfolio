import { useState } from 'react';
import Section from '../layout/Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    console.log('Form submitted:', formData);
    
    // Simulate successful form submission
    setFormStatus({
      type: 'success',
      message: 'Message received! I\'ll get back to you within 24 hours.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Section id="contact" title="Let's Connect" bgColor="bg-dark" withPattern={true}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover">
          <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Status Message */}
            {formStatus.type && (
              <div 
                className={`p-4 rounded-md ${
                  formStatus.type === 'success' ? 'bg-primary/20 text-primary' : 'bg-red-900/20 text-red-500'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            {/* Name Field */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-darker border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white peer transition-all duration-300"
                placeholder=" "
                required
              />
              <label 
                htmlFor="name"
                className="absolute text-text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-primary"
              >
                Name
              </label>
            </div>
            
            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-darker border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white peer transition-all duration-300"
                placeholder=" "
                required
              />
              <label 
                htmlFor="email"
                className="absolute text-text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-primary"
              >
                Email
              </label>
            </div>
            
            {/* Subject Field */}
            <div className="relative group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full px-4 py-3 bg-darker border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white peer transition-all duration-300"
                placeholder=" "
                required
              />
              <label 
                htmlFor="subject"
                className="absolute text-text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-primary"
              >
                Subject
              </label>
            </div>
            
            {/* Message Field */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="block w-full px-4 py-3 bg-darker border border-primary/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white peer transition-all duration-300"
                placeholder=" "
                required
              ></textarea>
              <label 
                htmlFor="message"
                className="absolute text-text-muted duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-card px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-primary"
              >
                Message
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col justify-between">
          <div className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="text-primary mr-4 p-3 bg-darker rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">Phone</h4>
                  <p className="text-text-muted">+91-7842565851</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="text-primary mr-4 p-3 bg-darker rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">Email</h4>
                  <p className="text-text-muted">Akshaydeepankulugari123@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="text-primary mr-4 p-3 bg-darker rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">Location</h4>
                  <p className="text-text-muted">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover">
            <h3 className="text-2xl font-bold text-white mb-4 relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
                { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 bg-darker rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
            
            <div className="mt-6 text-text-muted">
              <p>Available for internships and learning opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
