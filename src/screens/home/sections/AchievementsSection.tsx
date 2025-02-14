import { Medal } from 'lucide-react';
import { achievements } from '../arrays';

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          ÚLTIMAS <span className="text-yellow-500">CONQUISTAS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-blue-800/50 backdrop-blur rounded-lg p-6 hover:bg-blue-800 transition-colors"
            >
              <Medal className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
