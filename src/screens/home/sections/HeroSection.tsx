import { Flame } from 'lucide-react';
import logo from '../../../assets/logo.png';
import heroImage from "../../../assets/banneratlética.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 flex items-center">
              <Flame className="w-8 h-8 text-yellow-500 mr-3" />
              <span className="text-yellow-500 font-bold text-xl">DESDE 1998</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              BULLDOGS
              <span className="block text-yellow-500">FATEC SP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A Atlética mais BRABA da capital! 🏆 <br />
              Aqui é sangue nos olhos, suor na camisa e vitória no peito! 💪
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/parties"
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-md text-lg font-bold inline-block transform hover:scale-105 transition-transform"
              >
                NOSSAS FESTAS 🎉
              </a>
              <a
                href="/products"
                className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-bold inline-block transform hover:scale-105 transition-transform"
              >
                COMPRAR PRODUTOS
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={logo}
              alt="Bulldog Mascot"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
