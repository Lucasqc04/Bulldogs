import { Instagram, Mail, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">BULLDOGS <span className="text-yellow-500">FATEC SP</span></h3>
            <p className="text-gray-300">
              A Atlética mais BRABA da capital! Esporte, festas e integração
              pra galera mais ANIMAL de SP! 🏆
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">NOSSAS REDES</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.instagram.com/atletica.fatecsp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-500 transition-colors"
              >
                <Instagram className="w-6 h-6 mr-2" />
                @atleticafatecsp
              </a>
              <a
                href="https://www.instagram.com/bulldogstore.fatecsp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-500 transition-colors"
              >
                <Instagram className="w-6 h-6 mr-2" />
                @storebulldogs
              </a>
              <a
                href="https://linktr.ee/atletica.fatecsp?fbclid=PAZXh0bgNhZW0CMTEAAaYpqFdGhWewp5RZ29A8SlADJzhHFM5MwdsI91PDsW3NnTsPS1iCEtzEuWE_aem_a1jW4iJ1DfLNRFbRxFukgQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-500 transition-colors"
              >
                <Share2 className="w-6 h-6 mr-2" />
                Linktree
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTATO</h3>
            <p className="text-gray-300 mb-4">
              Av. Tiradentes, 615 - Bom Retiro
              <br />
              São Paulo - SP, 01124-060
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md inline-flex items-center transform hover:scale-105 transition-all"
              >
                WhatsApp Geral
              </a>
              <a
                href="mailto:contato@atleticafatecsp.com"
                className="block hover:text-yellow-500 transition-colors"
              >
                <Mail className="w-6 h-6 inline mr-2" />
                contato@atleticafatecsp.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Atlética FATECSP Bulldogs. Aqui é BULLDOGS, P#@$*! 🐶
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;