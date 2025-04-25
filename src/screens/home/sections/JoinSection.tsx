import { Users, Check, ArrowRight } from 'lucide-react';

const JoinSection = () => {
  return (
    <section id="join" className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Elementos de destaque visual */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-mediumblue/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-brand-deepblue/15 blur-3xl"></div>
      
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-navyblue/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-brand-deepblue/10 rounded-full"></div>
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-brand-deepblue/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Ícone de destaque */}
        <div className="inline-block p-4 bg-gradient-to-br from-brand-deepblue to-brand-mediumblue rounded-2xl shadow-lg mb-8 transform hover:rotate-6 transition-transform">
          <Users className="w-10 h-10 text-brand-light" />
        </div>
        
        {/* Título com destaque visual */}
        <h2 className="text-6xl font-bebas text-shadow-md text-brand-deepblue mb-6 tracking-wide">
          VISTA <span className="relative inline-block px-2">
            <span className="relative z-10">NOSSA</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-brand-lightblue/30 -rotate-2"></span>
          </span> CAMISA! 🔥
        </h2>
        
        {/* Linha decorativa */}
        <div className="w-32 h-1 bg-gradient-to-r from-brand-deepblue via-brand-mediumblue to-brand-deepblue mx-auto mb-8"></div>
        
        {/* Descrição com destaque - CORRIGIDO para melhor visibilidade do "BRABO" */}
        <p className="text-2xl text-brand-dark mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Entre pro time mais <span className="font-bold bg-brand-deepblue text-brand-light px-2 py-1 rounded-md">BRABO</span> da FATEC SP!<br />
          Aqui é <span className="font-bold">BULLDOGS</span> no coração! 🐶
        </p>
        
        {/* Botão de CTA com efeitos avançados */}
        <a
          href="/membership"
          className="group relative overflow-hidden bg-gradient-to-r from-brand-deepblue to-brand-mediumblue text-brand-light px-12 py-5 rounded-xl text-xl font-bebas text-shadow inline-flex items-center gap-3 transform hover:translate-y-[-3px] transition-all duration-300 border-2 border-brand-lightblue/30 shadow-lg hover:shadow-brand-blue/30"
        >
          {/* Efeito de ondas no hover */}
          <span className="absolute top-0 left-0 w-full h-full">
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-brand-lightblue/20 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-1000"></span>
          </span>
          
          {/* Texto e ícone com animação */}
          <span className="relative z-10">QUERO SER BULLDOG!</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </a>
        
        {/* Cards informativos com hover effects - CORRIGIDO para melhor contraste */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "FAÇA PARTE",
              description: "Entre para uma das nossas modalidades e represente a FATEC"
            },
            {
              title: "SEJA SÓCIO",
              description: "Descontos exclusivos e benefícios para membros"
            },
            {
              title: "EVENTOS",
              description: "Participe de festas, campeonatos e muito mais"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-brand-deepblue p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-brand-softblue/20"
            >
              {/* Borda superior com gradiente */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-lightblue to-brand-paleblue"></div>
              
              {/* Ícone de verificação */}
              <div className="mb-4 bg-brand-light w-12 h-12 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-brand-deepblue" />
              </div>
              
              <h3 className="font-bebas text-brand-light text-2xl mb-3">
                {item.title}
              </h3>
              
              <p className="text-brand-paleblue text-lg">
                {item.description}
              </p>
              
              {/* Decoração no canto */}
              <div className="absolute bottom-2 right-2 w-10 h-10 border border-brand-lightblue/20 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
