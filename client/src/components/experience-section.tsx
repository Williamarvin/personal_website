import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ExperienceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const experiences = [
    {
      company: "Chun Wo Holding Limited",
      position: "Software Engineer",
      duration: "Aug 2025 - Present",
      location: "Hong Kong",
      description: "Full-time software engineer developing enterprise solutions and digital transformation initiatives for construction and engineering operations.",
      tech: ["Full-Stack", "Enterprise", "Digital Transformation"]
    },
    {
      company: "Efinix",
      position: "Software Engineer Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Hong Kong",
      description: "Designed and implemented data parsing pipelines for FPGA configuration data and software tools, improving processing efficiency by 40% and enhancing development workflows.",
      tech: ["C++", "Python", "FPGA", "Software Tools"]
    },
    {
      company: "Alpha AI Technology",
      position: "AI Engineer (Part-time)",
      duration: "Mar 2024 - May 2024", 
      location: "Hong Kong",
      description: "Developed machine learning models for predictive analytics, achieving 92% accuracy in classification tasks.",
      tech: ["Python", "TensorFlow", "ML"]
    },
    {
      company: "HKUST (UROP)",
      position: "Research Assistant",
      duration: "Sep 2023 - Feb 2024",
      location: "Hong Kong",
      description: "Conducted research on autonomous systems and neural network optimization for marine applications.",
      tech: ["MOOS-IvP", "C++", "AI"]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Wavy separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent mb-20"></div>
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Building innovative solutions across multiple domains</p>
        </div>

        <div className={`space-y-12 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="browser-window p-8 transition-all duration-300 hover:scale-[1.02] project-card">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-electric mb-2">{exp.company}</h3>
                    <p className="font-semibold mb-2 text-neon">{exp.position}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.duration}<br/>{exp.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4 text-slate-300">
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
