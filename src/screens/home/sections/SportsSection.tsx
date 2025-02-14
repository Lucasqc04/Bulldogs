import { useState } from 'react';
import { sports } from '../arrays';

const SportsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedSports = expanded ? sports : sports.slice(0, 8);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            MODALIDADES <span className="text-yellow-500">BULLDOGS</span>
          </h2>
          <p className="text-xl text-gray-400">
            Inscreva-se e entre para a Atlética! Aqui tem esporte pra todo mundo! 🏆
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedSports.map((sport, index) => (
            <a
              key={index}
              href={sport.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-yellow-500 text-4xl mb-4">{sport.emoji}</div>
              <h3 className="text-white font-bold">{sport.name}</h3>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-bold transform hover:scale-105 transition-transform"
          >
            {expanded ? 'Ocultar Modalidades' : 'Ver Todas as Modalidades'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
