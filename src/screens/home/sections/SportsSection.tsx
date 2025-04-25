import { useState } from 'react';
import { sports } from '../arrays';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SportsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedSports = expanded ? sports : sports.slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-brand-blue via-brand-mediumblue to-brand-softblue/90 relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-deepblue/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-deepblue/50 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-brand-lightblue/10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full border border-brand-lightblue/10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-deepblue/50 rounded-full text-brand-paleblue text-sm font-medium tracking-wider mb-4 border border-brand-lightblue/20">
            FAÇA PARTE
          </span>
          <h2 className="text-5xl font-bebas text-shadow-md text-brand-light mb-6 tracking-wide">
            MODALIDADES <span className="text-brand-paleblue">BULLDOGS</span>
          </h2>
          <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto">
            Inscreva-se e entre para a Atlética! Aqui tem esporte pra todo mundo! 🏆
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-paleblue to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedSports.map((sport, index) => (
            <a
              key={index}
              href={sport.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navyblue to-brand-deepblue rounded-xl"></div>
              <div className="absolute inset-0 border border-brand-softblue/30 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-paleblue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-lightblue to-brand-paleblue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              
              <div className="relative p-6 text-center z-10">
                <div className="inline-flex items-center justify-center mb-4 transition-colors">
                  <img 
                    src={sport.image} 
                    alt={sport.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-brand-light font-bebas text-shadow text-xl tracking-wider group-hover:text-brand-paleblue transition-colors">
                  {sport.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative overflow-hidden bg-brand-light text-brand-deepblue px-8 py-4 rounded-md font-bebas text-shadow inline-flex items-center gap-2 transform hover:translate-y-[-2px] transition-all duration-300 border-2 border-brand-lightblue/50 shadow-lg hover:shadow-brand-lightblue/20"
          >
            <span className="relative z-10">
              {expanded ? 'OCULTAR MODALIDADES' : 'VER TODAS AS MODALIDADES'}
            </span>
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-light via-white to-brand-light opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
