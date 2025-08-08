import { useEffect, useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Experience', 'Portfolio'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Fixed Navigation Dots */}
      <nav className="fixed top-8 right-8 z-50 flex flex-col space-y-4">
        {['Home', 'About', 'Experience', 'Portfolio'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'nav-dot active'
                : 'bg-slate-600 hover:bg-electric'
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </nav>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-space/80 backdrop-blur-md border-b border-electric/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">WF</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('About')} className="hover:text-electric transition-colors">About</button>
            <button onClick={() => scrollToSection('Experience')} className="hover:text-electric transition-colors">Experience</button>
            <button onClick={() => scrollToSection('Portfolio')} className="hover:text-electric transition-colors">Portfolio</button>
            <a href="mailto:wafisilo@connect.ust.hk" className="hover:text-neon transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="https://github.com/Williamarvin" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/WilliamArvinFisilo" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
