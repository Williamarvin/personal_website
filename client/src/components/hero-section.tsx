import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const HeroSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative pt-20 bg-space">
      {/* Floating Geometric Shapes - retro style */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-electric/30 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-16 w-16 h-16 bg-neon/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-pink/30 rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-electric/10 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className={`max-w-6xl mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Main Browser Window - like the template */}
        <div className="browser-window max-w-5xl mx-auto mb-16">
          <div className="browser-header">
            <div className="browser-dot dot-red"></div>
            <div className="browser-dot dot-yellow"></div>
            <div className="browser-dot dot-green"></div>
          </div>
          <div className="p-16 text-center relative">
            <h1 className="text-7xl md:text-9xl font-bold mb-6">
              <span className="gradient-text">WILLIAM</span>
              <div className="font-handwriting text-electric text-3xl md:text-4xl mt-4 transform -rotate-2">
                builds stuff
              </div>
            </h1>
            <p className="text-neon text-xl md:text-2xl mb-8">
              software engineer + ai + marine automation
            </p>
            
            {/* Floating retro elements like pineapple equivalents */}
            <div className="absolute -left-12 top-1/4 hidden lg:block">
              <div className="w-32 h-32 opacity-30 halftone-effect animate-float">
                <i className="fas fa-robot text-electric text-4xl"></i>
              </div>
            </div>
            <div className="absolute -right-12 top-1/3 hidden lg:block">
              <div className="w-36 h-36 opacity-30 halftone-effect animate-float" style={{ animationDelay: '2s' }}>
                <i className="fas fa-ship text-neon text-5xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center text-electric hover:text-neon transition-colors text-xl group font-mono"
          >
            <span className="mr-3">projects</span>
            <div className="w-6 h-6 border-t-2 border-r-2 border-electric transform rotate-45 group-hover:translate-y-1 transition-transform"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
