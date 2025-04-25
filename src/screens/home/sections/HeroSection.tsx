import { Flame } from 'lucide-react';
import logo from '../../../assets/logo.png';
import heroImage from "../../../assets/banneratlética.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-deepblue via-brand-blue to-brand-mediumblue min-h-[85vh] flex items-center overflow-hidden">
      {/* Elementos de fundo com animação */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-lightblue blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-softblue blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-brand-paleblue blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 flex items-center">
              <div className="bg-brand-softblue/20 p-2 rounded-full border border-brand-softblue/30">
                <Flame className="w-6 h-6 text-brand-paleblue" />
              </div>
              <span className="text-brand-paleblue font-bebas text-xl text-shadow ml-3 tracking-wider">DESDE 1998</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bebas text-brand-light mb-6 leading-tight text-shadow-md tracking-wide">
              BULLDOGS
              <span className="block text-brand-gray">FATEC SP</span>
            </h1>
            <p className="text-xl text-brand-light mb-10 max-w-lg border-l-4 border-brand-softblue pl-4">
              A Atlética mais BRABA da capital! 🏆 <br />
              Aqui é sangue nos olhos, suor na camisa e vitória no peito! 💪
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/parties"
                className="group relative bg-brand-light hover:bg-opacity-95 text-brand-deepblue px-8 py-4 rounded-md text-lg font-bebas text-shadow inline-block transform hover:translate-y-[-2px] transition-all duration-300 border-2 border-brand-lightblue shadow-lg hover:shadow-brand-lightblue/40"
              >
                <span className="relative z-10">NOSSAS FESTAS 🎉</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-light via-white to-brand-light opacity-0 group-hover:opacity-20 rounded-md transition-opacity"></span>
              </a>
              <a
                href="/products"
                className="group relative bg-gradient-to-r from-brand-navyblue to-brand-deepblue hover:from-brand-deepblue hover:to-brand-navyblue text-brand-light px-8 py-4 rounded-md text-lg font-bebas text-shadow inline-block transform hover:translate-y-[-2px] transition-all duration-300 border-2 border-brand-softblue/30 shadow-lg hover:shadow-brand-deepblue/50"
              >
                <span className="relative z-10">COMPRAR PRODUTOS</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-softblue to-transparent opacity-0 group-hover:opacity-20 rounded-md transition-opacity"></span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute inset-0 -left-10 bg-brand-softblue rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-softblue/20 to-brand-lightblue/20 rounded-full blur-md"></div>
              <div className="relative">
                <img
                  src={logo}
                  alt="Bulldog Mascot"
                  className="w-full max-w-md mx-auto relative z-10 transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
