import { useState } from 'react';
import Section from '../layout/Section';

const About = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'education'>('summary');

  return (
    <Section id="about" title="About Me" bgColor="bg-dark" titleColor="text-primary">
      <div className="flex flex-col space-y-8">
        {/* Tabs for navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {[
            { id: 'summary', label: 'Professional Summary' },
            { id: 'education', label: 'Education' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 rounded-full transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-primary text-black font-bold' 
                  : 'bg-card text-text-muted hover:bg-card hover:text-primary'
              }`}
              onClick={() => setActiveTab(tab.id as 'summary' | 'education')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <div className="bg-card rounded-lg p-8 border border-primary/20 transition-all duration-500">
          {/* Professional Summary */}
          <div className={`${activeTab === 'summary' ? 'block' : 'hidden'} space-y-4`}>
            <p className="text-text-muted leading-relaxed">
              Passionate about <span className="text-primary font-semibold">Computer Science</span>, I aim to leverage my skills to contribute to organizational goals while
              continuously learning and adapting. Committed to driving <span className="text-primary font-semibold">innovation and growth</span> through technical expertise.
            </p>
            <p className="text-text-muted leading-relaxed">
              My technical proficiency spans multiple domains within computer science, allowing me to approach problems from various perspectives. 
              In programming, I am well-versed in <span className="text-primary font-semibold">Python and Java</span>, with a strong understanding of 
              object-oriented programming principles that enable me to create efficient and maintainable code.
            </p>
            <p className="text-text-muted leading-relaxed">
              In web development, I have cultivated skills in <span className="text-primary font-semibold">HTML, CSS, JavaScript, and React.js</span>, 
              enabling me to create responsive and interactive user interfaces that enhance user experience. My understanding of database technologies 
              includes both relational databases like <span className="text-primary font-semibold">MySQL</span> and NoSQL solutions such as <span className="text-primary font-semibold">MongoDB</span>.
            </p>
            <p className="text-text-muted leading-relaxed">
              Beyond technical abilities, I have developed a range of professional skills that enhance my effectiveness in collaborative environments. 
              My <span className="text-primary font-semibold">time management</span> capabilities allow me to prioritize tasks efficiently and meet deadlines consistently. 
              <span className="text-primary font-semibold"> Effective communication</span> is central to my professional approach, enabling me to articulate complex technical concepts clearly.
            </p>
          </div>

          {/* Education Timeline */}
          <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
            <div className="relative border-l-2 border-primary pl-8 space-y-12">
              {/* Bachelor's */}
              <div className="relative group">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-card group-hover:scale-110 transition-transform duration-300"></div>
                <div className="mb-1 text-xl font-bold text-primary">Bachelor of Technology in Computer Science (AI-ML)</div>
                <div className="text-white font-medium">Malla Reddy University, Maisammaguda</div>
                <div className="text-text-muted mb-2">2021 - 2025</div>
                <div className="text-text-muted">CGPA: 8.18</div>
              </div>

              {/* Intermediate */}
              <div className="relative group">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-card group-hover:scale-110 transition-transform duration-300"></div>
                <div className="mb-1 text-xl font-bold text-primary">Intermediate (12th)</div>
                <div className="text-white font-medium">Sri Chaitanya Jr. College, Madinaguda</div>
                <div className="text-text-muted mb-2">2021</div>
                <div className="text-text-muted">Percentage: 92.4%</div>
              </div>

              {/* 10th */}
              <div className="relative group">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-primary bg-card group-hover:scale-110 transition-transform duration-300"></div>
                <div className="mb-1 text-xl font-bold text-primary">10th</div>
                <div className="text-white font-medium">Gowtham model school, Madinaguda</div>
                <div className="text-text-muted mb-2">2019</div>
                <div className="text-text-muted">CGPA: 8.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
