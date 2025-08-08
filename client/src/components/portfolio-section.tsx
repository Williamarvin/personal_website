import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { projects, achievements } from '@/data/portfolio-data';

const PortfolioSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Wavy separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent mb-20"></div>
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Innovation through code - from autonomous systems to AI applications</p>
        </div>

        {/* Featured Project: InnoNautics */}
        {featuredProject && (
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
                    <h3 className="text-3xl font-bold gradient-text mb-4">{featuredProject.title}</h3>
                    <p className="text-neon text-lg mb-4">{featuredProject.category} • <span className="text-slate-400">Founder & Lead Engineer</span></p>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      {featuredProject.achievements?.map((achievement) => (
                        <div key={achievement} className="flex items-center space-x-3">
                          <i className="fas fa-trophy text-electric"></i>
                          <span className="text-slate-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {featuredProject.liveUrl && (
                        <a 
                          href={featuredProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric to-neon rounded-lg text-white font-semibold transition-all hover:shadow-lg hover:shadow-electric/25"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Visit Site
                        </a>
                      )}
                      <a 
                        href={featuredProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-6 py-3 border border-electric text-electric rounded-lg font-semibold transition-all hover:bg-electric hover:text-white"
                      >
                        <i className="fab fa-github mr-2"></i>
                        View Code
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img 
                      src={featuredProject.imageUrl} 
                      alt={`${featuredProject.title} project showcase`} 
                      className="w-full rounded-xl shadow-lg" 
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
                      alt="Marine engineering development workspace" 
                      className="w-full rounded-xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {otherProjects.map((project) => (
            <div key={project.id} className="browser-window project-card transition-all duration-500">
              <div className="browser-header">
                <div className="browser-dot dot-red"></div>
                <div className="browser-dot dot-yellow"></div>
                <div className="browser-dot dot-green"></div>
              </div>
              <div className="p-6">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} project`} 
                  className="w-full h-32 object-cover rounded-lg mb-4" 
                />
                <h4 className="text-xl font-bold text-electric mb-2">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-electric/10 text-electric px-2 py-1 rounded">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-neon/10 text-neon px-2 py-1 rounded">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-electric hover:text-neon transition-colors text-sm"
                >
                  <i className="fab fa-github mr-1"></i> View Repository
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-neon mb-8">Recognition & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.title} className={`bg-gradient-to-br from-${achievement.color}/10 to-neon/10 p-6 rounded-xl border border-${achievement.color}/20`}>
                <i className={`${achievement.icon} text-3xl text-${achievement.color} mb-4`}></i>
                <h4 className={`text-lg font-semibold text-${achievement.color} mb-2`}>{achievement.title}</h4>
                <p className="text-slate-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
