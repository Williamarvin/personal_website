import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { projects } from '@/data/portfolio-data';

const ProjectsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-24 bg-space relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-neon mx-auto mb-8"></div>
        </div>

        {/* Project Grid - exactly like the template with 3x3 layout */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* InnoNautics - Featured Project */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-electric/20 to-neon/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="InnoNautics marine automation" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">InnoNautics</h3>
                <p className="text-sm text-gray-200">Marine Transport Automation</p>
              </div>
            </div>
          </div>

          {/* TacOR */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-neon/20 to-pink/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="TacOR assistive technology" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">TacOR</h3>
                <p className="text-sm text-gray-200">Assistive Technology</p>
              </div>
            </div>
          </div>

          {/* GENAI NPC */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-pink/20 to-electric/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="GENAI NPC gaming system" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">GENAI NPC</h3>
                <p className="text-sm text-gray-200">AI Gaming Systems</p>
              </div>
            </div>
          </div>

          {/* Excel LinkedList */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-electric/20 to-neon/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Excel with LinkedList" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">Excel LinkedList</h3>
                <p className="text-sm text-gray-200">Data Structures</p>
              </div>
            </div>
          </div>

          {/* Dungeon OOP */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-neon/20 to-pink/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Dungeon game development" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">Dungeon OOP</h3>
                <p className="text-sm text-gray-200">Game Development</p>
              </div>
            </div>
          </div>

          {/* HKUST Hall System */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-pink/20 to-electric/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="HKUST Hall System" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">HKUST Hall System</h3>
                <p className="text-sm text-gray-200">System Enhancement</p>
              </div>
            </div>
          </div>

          {/* Instant NGP */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-electric/20 to-neon/20 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Instant NGP neural graphics" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">Instant NGP</h3>
                <p className="text-sm text-gray-200">Neural Graphics</p>
              </div>
            </div>
          </div>

          {/* InSight */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-neon/20 to-pink/20 relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-electric/30 to-neon/30 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-eye text-4xl text-white mb-2"></i>
                  <h3 className="text-xl font-bold text-white mb-2">InSight</h3>
                  <p className="text-sm text-gray-200">Assistive AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Web Dev Portfolio */}
          <div className="browser-window group transition-all duration-500 hover:scale-105">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-pink/20 to-electric/20 relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink/30 to-electric/30 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-code text-4xl text-white mb-2"></i>
                  <h3 className="text-xl font-bold text-white mb-2">Web Portfolio</h3>
                  <p className="text-sm text-gray-200">16+ Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
