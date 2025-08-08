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
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                    alt="InnoNautics marine automation" 
                    className="w-full rounded-xl shadow-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 4 Other Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {projects.slice(1, 5).map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="browser-window project-card transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group"
            >
              <div className="browser-header">
                <div className="browser-dot dot-red"></div>
                <div className="browser-dot dot-yellow"></div>
                <div className="browser-dot dot-green"></div>
              </div>
              <div className="p-6">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} project`} 
                    className="w-full h-32 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity" 
                  />
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-electric/30 to-neon/30 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                )}
                <h4 className="text-xl font-bold text-electric mb-2 group-hover:text-neon transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-electric text-sm font-semibold">View on GitHub →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
