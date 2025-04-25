import { Medal, Star, Trophy } from 'lucide-react';
import { achievements } from '../arrays';

// Função para alternar entre ícones diferentes
const getIcon = (index: number) => {
  const icons = [
    <Trophy className="w-14 h-14 text-brand-lightblue mb-4" />,
    <Medal className="w-14 h-14 text-brand-lightblue mb-4" />,
    <Star className="w-14 h-14 text-brand-lightblue mb-4" />
  ];
  return icons[index % 3];
}

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-deepblue to-brand-navyblue relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-brand-softblue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-brand-mediumblue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-brand-deepblue/20 to-transparent"></div>
      </div>
      
      <div className="absolute -top-10 right-10 w-20 h-20 border-4 border-brand-lightblue/10 rounded-full"></div>
      <div className="absolute top-40 left-10 w-12 h-12 border-2 border-brand-lightblue/10 rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-brand-paleblue/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-brand-blue/50 border-2 border-brand-lightblue/20">
            <Trophy className="w-8 h-8 text-brand-paleblue" />
          </div>
          
          <h2 className="text-5xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
            ÚLTIMAS <span className="text-brand-lightblue">CONQUISTAS</span>
          </h2>
          
          <p className="text-center text-brand-paleblue mb-10 max-w-2xl mx-auto">
            Nossa história é escrita com garra, suor e vitórias. Conheça algumas das nossas conquistas mais recentes.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl transform transition-all duration-500 hover:-translate-y-2"
            >
              {/* Camada de fundo com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-mediumblue/70 rounded-xl"></div>
              
              {/* Borda com efeito de brilho */}
              <div className="absolute inset-0 border border-brand-softblue/20 rounded-xl group-hover:border-brand-lightblue/30 transition-colors"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-softblue/10 via-brand-lightblue/5 to-brand-softblue/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
              
              {/* Efeito de destaque no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lightblue to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-brand-lightblue via-transparent to-transparent"></div>
              </div>
              
              {/* Conteúdo */}
              <div className="relative p-8 z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-deepblue rounded-full mb-6 border border-brand-softblue/30">
                  {getIcon(index)}
                </div>
                
                <h3 className="text-2xl font-bebas text-shadow-md text-brand-light mb-3 tracking-wide group-hover:text-brand-paleblue transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-brand-paleblue/80 group-hover:text-brand-paleblue transition-colors">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
