import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import SportsSection from './sections/SportsSection';
import AchievementsSection from './sections/AchievementsSection';
import JoinSection from './sections/JoinSection';

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <SportsSection />
      <AchievementsSection />
      <JoinSection />
    </div>
  );
};

export default HomeScreen;
