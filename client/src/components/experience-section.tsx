import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ExperienceSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const experiences = [
    {
      company: "Chun Wo Development Holdings Limited",
      position: "Software Engineer",
      duration: "Aug 2025 - Present",
      location: "Hong Kong",
      description: "Full-time software engineer",
      tech: ["React", "Python"]
    },
    {
      company: "Efinix",
      position: "Software Engineer",
      duration: "Feb 2025 - April 2025 (Part-Time) • June 2024 - Aug 2024",
      location: "New Territories, HK",
      description: "Part-Time Software Engineer (Feb 2025 - April 2025): Developed a Flutter application using MVC architecture and Dart, implementing comprehensive UI/UX solutions with CI/CD pipeline integration, resulting in 30% faster deployment cycles. Software Engineer (June 2024 - Aug 2024): Led the complete revamp of the in-house coding editor (Primus) through extensive Node.js and REST API testing, achieving a 50% improvement in inter-process communication efficiency. Engineered a Python-based communication framework utilizing ZMQ, PyEE, and Threads, reducing backend-frontend latency from 0.2 seconds to 0.05 seconds, enhancing user experience by 75%.",
      tech: ["Flutter", "Dart", "MVC Architecture", "CI/CD", "Node.js", "Python", "ZMQ", "PyEE", "RestAPI"]
    },
    {
      company: "Alpha AI Technology",
      position: "Software Engineer",
      duration: "June 2023 - Aug 2023", 
      location: "Hong Kong Island, HK",
      description: "Architected and developed a comprehensive ERP system backend using Node.js and PostgreSQL, delivering a scalable SaaS platform template builder that reduced development time by 75% and served 20+ enterprise clients. Led cross-functional team initiatives and deployed a Java-based object detection application for dash cameras, leveraging AWS compute units, EMR with Apache Hadoop, and S3 for real-time video processing, serving 30+ users with 99.9% uptime.",
      tech: ["Node.js", "PostgreSQL", "Java", "AWS", "Apache Hadoop", "S3"]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Wavy separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent mb-20"></div>
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Building innovative solutions across multiple domains</p>
        </div>

        <div className={`space-y-12 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="browser-window p-8 transition-all duration-300 hover:scale-[1.02] project-card">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-electric mb-2">{exp.company}</h3>
                    <p className="font-semibold mb-2 text-neon">{exp.position}</p>
                    <p className="text-slate-400 text-sm mb-4">{exp.duration}<br/>{exp.location}</p>
                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 space-y-4 text-slate-300">
                    {exp.company === "Efinix" ? (
                      <>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-electric mb-2">Part-Time Software Engineer (Feb 2025 - April 2025):</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 ml-5">
                          <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                          <p>Developing a Flutter app using MVC architecture, Dart, and implementing UI, backend with a CI/CD pipeline.</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-neon mb-2">Software Engineer (June 2024 - Aug 2024):</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 ml-5">
                          <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                          <p>Revamped the codebase for the in-house coding editor (Primus) through extensive testing of Node.js and RestAPI, along with research into the VS Code codebase, achieving a 50% boost in inter-process communication efficiency.</p>
                        </div>
                        <div className="flex items-start space-x-3 ml-5">
                          <div className="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                          <p>Engineered a Python-based communication framework utilizing ZMQ, PyEE, and Threads, decreasing backend-frontend latency from 0.2 seconds to 0.05 seconds, which improved user experience across the coding editor.</p>
                        </div>
                      </>
                    ) : (
                      exp.description.split('. ').map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></div>
                          <p>{point}{point.endsWith('.') ? '' : '.'}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
