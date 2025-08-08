import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ExperienceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const experiences = [
    {
      company: "Efinix",
      position: "Software Engineer Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Hong Kong",
      description: "Designed and implemented a data parsing pipeline for FPGA configuration data, improving processing efficiency by 40%.",
      tech: ["C++", "Python", "FPGA"]
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
    <section id="experience" ref={ref} className="min-h-screen cloud-bg relative py-24">
      {/* Wavy transition */}
      <div className="wave-separator"></div>
      
      {/* Floating elements like the template */}
      <div className="halftone-dolphin top-1/4 right-1/4 w-28 h-18 animate-swim">
        🚀
      </div>
      <div className="halftone-dolphin bottom-1/3 left-1/4 w-24 h-16 animate-swim" style={{ animationDelay: '4s' }}>
        💻
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800">
            work experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto mb-8"></div>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-electric/20">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-electric mb-2">{exp.company}</h3>
                  <p className="font-semibold text-gray-700 mb-2">{exp.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom wavy transition */}
      <div className="wave-separator transform rotate-180 mt-16"></div>
    </section>
  );
};

export default ExperienceSection;
