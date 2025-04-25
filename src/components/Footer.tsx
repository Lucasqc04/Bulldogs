import { Instagram, Mail, Share2 } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-brand-navyblue to-brand-deepblue text-brand-light overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-brand-softblue/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-40 w-80 h-80 rounded-full bg-brand-mediumblue/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-lightblue/20 mr-3">
                <img 
                  src={logo} 
                  alt="Logo Bulldogs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bebas text-shadow">BULLDOGS <span className="text-brand-lightblue">FATEC SP</span></h3>
            </div>
            <p className="text-brand-paleblue leading-relaxed mb-6">
              A Atlética mais BRABA da capital! Esporte, festas e integração
              pra galera mais ANIMAL de SP! 🏆
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/atletica.fatecsp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-blue/50 flex items-center justify-center hover:bg-brand-mediumblue transition-colors border border-brand-softblue/20"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linktr.ee/atletica.fatecsp" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-blue/50 flex items-center justify-center hover:bg-brand-mediumblue transition-colors border border-brand-softblue/20"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@atleticafatecsp.com" 
                className="w-10 h-10 rounded-full bg-brand-blue/50 flex items-center justify-center hover:bg-brand-mediumblue transition-colors border border-brand-softblue/20"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bebas text-shadow mb-6 text-brand-lightblue relative inline-block">
              NOSSAS REDES
              <span className="absolute -bottom-1 left-0 w-full h-px bg-brand-softblue/30"></span>
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.instagram.com/atletica.fatecsp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-lightblue transition-colors group"
              >
                <div className="bg-brand-blue/50 p-2 rounded-full group-hover:bg-brand-mediumblue transition-colors mr-3 border border-brand-softblue/20">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@atleticafatecsp</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
              <a
                href="https://www.instagram.com/bulldogstore.fatecsp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-lightblue transition-colors group"
              >
                <div className="bg-brand-blue/50 p-2 rounded-full group-hover:bg-brand-mediumblue transition-colors mr-3 border border-brand-softblue/20">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@storebulldogs</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
              <a
                href="https://linktr.ee/atletica.fatecsp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-brand-lightblue transition-colors group"
              >
                <div className="bg-brand-blue/50 p-2 rounded-full group-hover:bg-brand-mediumblue transition-colors mr-3 border border-brand-softblue/20">
                  <Share2 className="w-4 h-4" />
                </div>
                <span>Linktree</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bebas text-shadow mb-6 text-brand-lightblue relative inline-block">
              CONTATO
              <span className="absolute -bottom-1 left-0 w-full h-px bg-brand-softblue/30"></span>
            </h3>
            <div className="bg-brand-blue/30 rounded-lg p-4 mb-6 border border-brand-softblue/20">
              <p className="text-brand-light mb-1 font-medium">Endereço</p>
              <p className="text-brand-paleblue">
                Av. Tiradentes, 615 - Bom Retiro
                <br />
                São Paulo - SP, 01124-060
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511993288916"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-brand-mediumblue to-brand-softblue hover:from-brand-softblue hover:to-brand-mediumblue text-brand-light px-4 py-2 rounded-md inline-flex items-center transform hover:translate-y-[-2px] transition-all border border-brand-lightblue/20"
              >
                <span>WhatsApp Geral</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
              </a>
              <a
                href="mailto:contato@atleticafatecsp.com"
                className="group flex items-center hover:text-brand-lightblue transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>contato@atleticafatecsp.com</span>
                <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-blue/40 text-center">
          <p className="text-brand-gray text-sm">
            © {new Date().getFullYear()} Atlética FATECSP Bulldogs. Aqui é BULLDOGS, P#@$*! 🐶
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;