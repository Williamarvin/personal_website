import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Wavy separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent mb-20"></div>
        
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="space-y-8 text-slate-300 leading-relaxed text-lg">
            <p>
              I am William Arvin Fisilo, a software engineer specializing in full-stack development and system architecture. I recently graduated with a Bachelor's in Integrative Systems and Design from HKUST with an extended major in AI, bringing a strong foundation in both technical implementation and business problem-solving.
            </p>
            
            <p>
              My experience encompasses developing scalable enterprise solutions using modern technologies including Node.js, Python, React, and C++. I have successfully delivered projects that serve 20+ clients and reduced development time by over 75% through efficient system design and implementation.
            </p>
            
            <p>
              As the founder of <span className="text-electric font-semibold">InnoNautics</span>, I lead a team of 4 developers in creating autonomous marine transport systems. While I continue to guide the company's vision and technical direction, I now balance this with my full-time professional commitments. This experience has honed my skills in stakeholder management, cross-functional collaboration, and delivering complex technical solutions under tight deadlines.
            </p>
            
            <p className="italic text-electric font-handwriting text-2xl transform -rotate-1 mt-12">
              My professional mission is to architect and deliver scalable software solutions that drive business value while maintaining the highest standards of code quality and system reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
