import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import SportsSection from './sections/SportsSection';
import AchievementsSection from './sections/AchievementsSection';
import JoinSection from './sections/JoinSection';

// Componente de separador visual avançado entre seções
const SectionDivider = ({ variant = "default" }) => {
  const baseClasses = "w-full overflow-hidden relative";
  
  switch(variant) {
    case "waves":
      return (
        <div className={`${baseClasses} h-24`}>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-brand-deepblue"></path>
            </svg>
          </div>
        </div>
      );
    case "slant":
      return (
        <div className={`${baseClasses} h-20`}>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-brand-paleblue/10 to-brand-lightblue/10"></div>
          <div className="transform -skew-y-2 bg-brand-deepblue h-20 w-full"></div>
        </div>
      );
    case "triangle":
      return (
        <div className={`${baseClasses} h-16 flex items-center justify-center`}>
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[30px] border-t-brand-deepblue border-r-[50px] border-r-transparent"></div>
        </div>
      );
    default:
      return (
        <div className={`${baseClasses} h-10`}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-softblue to-transparent"></div>
          <div className="h-10 w-full bg-gradient-to-b from-brand-blue to-transparent opacity-50"></div>
        </div>
      );
  }
};

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SectionDivider variant="waves" />
      <StatsSection />
      <SectionDivider variant="default" />
      <SportsSection />
      <SectionDivider variant="slant" />
      <AchievementsSection />
      <SectionDivider variant="triangle" />
      <JoinSection />
    </div>
  );
};

export default HomeScreen;
