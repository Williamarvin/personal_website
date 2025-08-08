import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { technicalSkills } from '@/data/portfolio-data';

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Wavy separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent mb-20"></div>
        
        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Hey there!
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                My name is William Arvin Fisilo, and I specialize in software engineering with a focus on artificial intelligence and autonomous systems. Currently pursuing my Bachelor's in Integrative Systems and Design at HKUST with an extended major in AI.
              </p>
              
              <p>
                As a versatile engineer, my experience spans from developing scalable marine automation systems using C++ and MOOS-IvP, to building full-stack applications with Node.js, Python, and React. I have a passion for creating innovative solutions that push the boundaries of technology.
              </p>
              
              <p>
                I'm the founder of <span className="text-electric font-semibold">InnoNautics</span>, where we develop autonomous marine transport systems. I'm also deeply involved in assistive technologies for the visually impaired and have won multiple competitions including the InnoX competition.
              </p>
              
              <p className="italic text-electric font-handwriting text-xl transform -rotate-1">
                My mission as a software engineer is to combine creative mechanics, aesthetics, and innovation - all in the name of making genuinely compelling experiences that push technological boundaries.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-neon">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Proficient Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.proficient.map((skill) => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Technologies & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frameworks.map((skill) => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Profile photo with decorative frame */}
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-electric to-neon rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-electric/20 to-neon/20 p-1 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="William Arvin Fisilo professional photo" 
                  className="w-full rounded-xl shadow-2xl" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-electric to-neon rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
