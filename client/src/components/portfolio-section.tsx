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

        {/* Featured Project: InnoNautics - Large card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="browser-window project-card transition-all duration-500 hover:shadow-2xl">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
              <span className="text-slate-400 text-sm ml-4">innonautics.com</span>
            </div>
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-4">InnoNautics</h3>
                  <p className="text-neon text-lg mb-4">Marine Automation • Founder & Lead Engineer</p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Revolutionary autonomous marine transport systems using advanced AI and sensor fusion. 
                    Developing cutting-edge technology for the future of maritime transportation.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300">Winner of InnoX Competition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-electric" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300">Autonomous Navigation Technology</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="tech-tag">C++</span>
                    <span className="tech-tag">MOOS-IvP</span>
                    <span className="tech-tag">AI/ML</span>
                    <span className="tech-tag">Robotics</span>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://innonautics.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric to-neon rounded-lg text-white font-semibold transition-all hover:shadow-lg hover:shadow-electric/25"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Site
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="InnoNautics marine automation" 
                    className="w-full rounded-xl shadow-lg" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
                    alt="Marine engineering development" 
                    className="w-full rounded-xl shadow-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 4 Other Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* TacOR */}
          <div className="browser-window project-card transition-all duration-500">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="TacOR assistive technology" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-xl font-bold text-electric mb-2">TacOR</h4>
              <p className="text-slate-400 text-sm mb-4">Tactile software for visually impaired navigation using LiDAR and computer vision</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">LiDAR</span>
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">OpenCV</span>
              </div>
            </div>
          </div>

          {/* GENAI NPC */}
          <div className="browser-window project-card transition-all duration-500">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="GENAI NPC gaming system" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-xl font-bold text-electric mb-2">GENAI NPC Scheduler</h4>
              <p className="text-slate-400 text-sm mb-4">AI-powered NPC behavior system for intelligent game character interactions</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-neon/10 text-neon px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-neon/10 text-neon px-2 py-1 rounded">AI/ML</span>
                <span className="text-xs bg-neon/10 text-neon px-2 py-1 rounded">Gaming</span>
              </div>
            </div>
          </div>

          {/* Instant NGP */}
          <div className="browser-window project-card transition-all duration-500">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Instant NGP neural graphics" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
              />
              <h4 className="text-xl font-bold text-electric mb-2">Instant NGP</h4>
              <p className="text-slate-400 text-sm mb-4">Neural graphics primitives for real-time 3D scene reconstruction</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-pink/10 text-pink px-2 py-1 rounded">C++</span>
                <span className="text-xs bg-pink/10 text-pink px-2 py-1 rounded">CUDA</span>
                <span className="text-xs bg-pink/10 text-pink px-2 py-1 rounded">Neural</span>
              </div>
            </div>
          </div>

          {/* InSight */}
          <div className="browser-window project-card transition-all duration-500">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>
            <div className="p-6">
              <div className="w-full h-32 bg-gradient-to-br from-electric/30 to-neon/30 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-electric mb-2">InSight</h4>
              <p className="text-slate-400 text-sm mb-4">Computer vision assistive technology for enhanced spatial awareness</p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">CV</span>
                <span className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
