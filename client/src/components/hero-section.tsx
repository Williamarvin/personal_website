import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const HeroSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Floating Geometric Shapes */}
      <div className="floating-shape top-20 left-10 w-32 h-32 border-2 border-electric/20 transform rotate-45 animate-float"></div>
      <div className="floating-shape top-1/3 right-16 w-24 h-24 bg-gradient-to-r from-electric/10 to-neon/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-shape bottom-1/4 left-1/4 w-16 h-16 border-2 border-neon/20 transform rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="floating-shape top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-pink/10 to-electric/10 transform rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className={`max-w-6xl mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Browser Window Display */}
        <div className="browser-window max-w-4xl mx-auto mb-12 animate-pulse-glow">
          <div className="browser-header">
            <div className="browser-dot dot-red"></div>
            <div className="browser-dot dot-yellow"></div>
            <div className="browser-dot dot-green"></div>
          </div>
          <div className="p-12 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">WILLIAM</span>
              <span className="text-slate-100"> ARVIN</span>
            </h1>
            <div className="font-handwriting text-electric text-2xl md:text-3xl mb-6 transform -rotate-2">
              builds innovative systems
            </div>
            <p className="text-neon text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              software engineer + artificial intelligence + autonomous systems
            </p>
            
            {/* Floating elements around the main content */}
            <div className="absolute -left-16 top-1/4 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                alt="Mechanical engineering component" 
                className="w-32 h-32 rounded-xl opacity-20 animate-float" 
              />
            </div>
            <div className="absolute -right-16 top-1/3 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
                alt="Autonomous marine vehicle" 
                className="w-36 h-36 rounded-xl opacity-20 animate-float" 
                style={{ animationDelay: '2s' }} 
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={scrollToPortfolio}
            className="inline-flex items-center text-electric hover:text-neon transition-colors text-lg group"
          >
            <span className="mr-2">projects</span>
            <i className="fas fa-arrow-down animate-bounce group-hover:translate-y-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
