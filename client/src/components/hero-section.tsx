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
          <div className="p-12 text-center relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">WILLIAM</span>
              <span className="text-slate-100"> ARVIN</span>
            </h1>
            <div className="font-handwriting text-electric text-2xl md:text-3xl mb-6 transform -rotate-2">
              codes
            </div>
            <p className="text-neon text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              software engineer + artificial intelligence + marine automation
            </p>
            
            {/* Floating elements around the main content - styled like the template */}
            <div className="absolute -left-16 top-1/4 hidden lg:block">
              <div className="w-32 h-32 border-2 border-electric/30 rounded-xl p-2 backdrop-blur-sm bg-electric/5 transform rotate-12 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-electric/20 to-neon/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 top-1/3 hidden lg:block">
              <div className="w-36 h-36 border-2 border-neon/30 rounded-xl p-2 backdrop-blur-sm bg-neon/5 transform -rotate-6 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-full h-full bg-gradient-to-br from-neon/20 to-pink/20 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center text-electric hover:text-neon transition-colors text-lg group"
          >
            <span className="mr-2">projects</span>
            <svg className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
