import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ContactSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <footer ref={ref} className="py-16 relative">
      <div className={`max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Animated marine elements */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100" 
            alt="Marine innovation representation" 
            className="inline-block w-16 h-8 rounded opacity-20 mx-4 animate-float" 
          />
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100" 
            alt="Marine innovation representation" 
            className="inline-block w-16 h-8 rounded opacity-20 mx-4 animate-float" 
            style={{ animationDelay: '1s' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100" 
            alt="Marine innovation representation" 
            className="inline-block w-16 h-8 rounded opacity-20 mx-4 animate-float" 
            style={{ animationDelay: '2s' }} 
          />
        </div>

        <h3 className="text-3xl font-bold gradient-text mb-8">Let's Build Something Amazing</h3>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Whether it's about autonomous systems, 
          AI applications, or innovative software solutions, let's connect!
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://github.com/Williamarvin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-electric transition-colors text-2xl"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com/in/WilliamArvinFisilo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-electric transition-colors text-2xl"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="mailto:wafisilo@connect.ust.hk" 
            className="text-slate-400 hover:text-neon transition-colors text-2xl"
            aria-label="Email Contact"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="tel:+85264701754" 
            className="text-slate-400 hover:text-pink transition-colors text-2xl"
            aria-label="Phone Contact"
          >
            <i className="fas fa-phone"></i>
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          <p>© Copyright 2025 by William Arvin Fisilo</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
