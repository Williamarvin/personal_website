import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';

const Home = () => {
  return (
    <div className="bg-space text-slate-100 font-sans overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Home;
