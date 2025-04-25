const KitHighlight = () => {
  return (
    <div className="mt-16 bg-brand-lightblue/20 backdrop-blur rounded-xl p-8 text-center border border-brand-softblue/30 relative overflow-hidden group">
      {/* Efeitos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-brand-lightblue/10 group-hover:bg-brand-lightblue/20 transition-all duration-700"></div>
        <div className="absolute -left-5 -top-5 w-28 h-28 rounded-full bg-brand-softblue/10 group-hover:bg-brand-softblue/20 transition-all duration-700"></div>
      </div>
      
      <div className="relative z-10">
        <span className="inline-block px-4 py-2 bg-brand-mediumblue rounded-full text-brand-light text-sm font-medium tracking-wider mb-4 border border-brand-lightblue/20">
          OFERTA ESPECIAL
        </span>
        
        <h2 className="text-3xl font-bebas text-shadow text-brand-light mb-4">KIT CALOUROS 2024.1 🎓</h2>
        
        <p className="text-brand-paleblue text-xl mb-6 max-w-2xl mx-auto">
          Garanta já seu Kit Calouro com condições especiais! <br />
          Camiseta + Caneca + Adesivos + BRINDES SURPRESA!
        </p>
        
        <a
          href="https://wa.me/5511993288916?text=Quero garantir meu Kit Calouro!"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-brand-light text-brand-deepblue px-8 py-4 rounded-md font-bebas text-shadow inline-block transform hover:translate-y-[-2px] transition-all duration-300 border-2 border-brand-lightblue/30 shadow-lg hover:shadow-brand-lightblue/20"
        >
          <span className="relative z-10">GARANTIR MEU KIT 🎁</span>
          <span className="absolute inset-0 bg-gradient-to-r from-brand-light via-white to-brand-light opacity-0 group-hover:opacity-30 transition-opacity"></span>
        </a>
      </div>
    </div>
  );
};

export default KitHighlight;
