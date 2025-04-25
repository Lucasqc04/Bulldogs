const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-navyblue via-brand-deepblue to-brand-navyblue text-brand-light py-16 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-4 border-brand-paleblue/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-4 border-brand-paleblue/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-softblue to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas text-shadow-md text-brand-light mb-2">NOSSOS NÚMEROS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-paleblue to-brand-lightblue mx-auto mb-6"></div>
          <p className="text-brand-paleblue max-w-2xl mx-auto">Uma história de sucesso que cresce a cada ano</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "15+", label: "Modalidades" },
            { value: "1000+", label: "Atletas" },
            { value: "50+", label: "Títulos" },
            { value: "25+", label: "Anos de História" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden p-8 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-mediumblue to-brand-blue opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute inset-0 border border-brand-softblue/20 rounded-lg"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-lightblue/10 via-brand-softblue/5 to-brand-lightblue/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-5xl font-bebas text-shadow-md text-brand-light mb-2 group-hover:text-brand-paleblue transition-colors">
                  {stat.value}
                </div>
                <div className="text-brand-paleblue font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
