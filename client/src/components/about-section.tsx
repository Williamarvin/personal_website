import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="min-h-screen cloud-bg relative py-24">
      {/* Wavy transition */}
      <div className="wave-separator"></div>
      
      {/* Halftone dolphins like the template */}
      <div className="halftone-dolphin top-1/4 left-1/4 w-32 h-20 animate-swim">
        🐋
      </div>
      <div className="halftone-dolphin top-1/2 right-1/4 w-28 h-18 animate-swim" style={{ animationDelay: '3s' }}>
        🐋
      </div>
      <div className="halftone-dolphin bottom-1/3 left-1/3 w-24 h-16 animate-swim" style={{ animationDelay: '6s' }}>
        🐋
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800">
            Hey there!
          </h2>
          
          {/* Profile photo with halftone frame like template */}
          <div className="relative max-w-xs mx-auto mb-12">
            <div className="halftone-effect p-1 rounded-2xl bg-gradient-to-br from-electric to-neon">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                alt="William Arvin Fisilo professional photo" 
                className="w-full rounded-xl" 
              />
            </div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p className="text-lg">
              My name is William Arvin Fisilo, and I like to build all kinds of things. I specialize in software engineering with a focus on AI, autonomous systems, and marine automation. Currently studying at HKUST.
            </p>
            
            <p className="text-lg">
              As a versatile engineer, my experience spans from developing autonomous marine systems using C++ and MOOS-IvP, to creating assistive technologies for the visually impaired with computer vision and LiDAR.
            </p>
            
            <p className="text-lg">
              I'm the founder of <span className="font-bold text-electric">InnoNautics</span> - we're developing revolutionary autonomous marine transport systems. I've also won the InnoX competition and worked at companies like Efinix and Alpha AI Technology.
            </p>
            
            <p className="italic text-electric font-handwriting text-2xl transform -rotate-1 mt-8">
              My mission as a software engineer is to combine creative mechanics, aesthetics, and innovation - all in the name of making genuinely compelling experiences that push technological boundaries.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom wavy transition */}
      <div className="wave-separator transform rotate-180 mt-16"></div>
    </section>
  );
};

export default AboutSection;
