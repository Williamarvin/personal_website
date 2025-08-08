import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { experiences } from '@/data/portfolio-data';

const ExperienceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const getPositionColor = (type: string) => {
    switch (type) {
      case 'part-time': return 'text-electric';
      case 'internship': return 'text-neon';
      case 'research': return 'text-pink';
      default: return 'text-electric';
    }
  };

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
            <div key={exp.id} className="relative">
              <div className="browser-window p-8 transition-all duration-300 hover:scale-[1.02] project-card">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-electric mb-2">{exp.company}</h3>
                    <p className={`font-semibold mb-2 ${getPositionColor(exp.type)}`}>{exp.position}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.duration}<br/>{exp.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4 text-slate-300">
                    {exp.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          i % 3 === 0 ? 'bg-electric' : i % 3 === 1 ? 'bg-neon' : 'bg-pink'
                        }`}></div>
                        <p dangerouslySetInnerHTML={{ 
                          __html: desc.replace(/(\d+%|\d+\+|\d+s?)/g, '<span class="text-electric font-semibold">$1</span>')
                        }}></p>
                      </div>
                    ))}
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
