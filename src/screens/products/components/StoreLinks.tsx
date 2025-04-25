import { MessageCircle, Instagram } from 'lucide-react';

const StoreLinks = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <a
        href="https://www.instagram.com/bulldogstore.fatecsp/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden bg-gradient-to-r from-brand-mediumblue to-brand-blue text-brand-light px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all border border-brand-softblue/30 shadow-lg"
      >
        <Instagram className="w-5 h-5" />
        <span>@storebulldogs</span>
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
      </a>
      <a
        href="https://wa.me/5511993288916"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden bg-gradient-to-r from-brand-blue to-brand-mediumblue text-brand-light px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all border border-brand-lightblue/20 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Comprar</span>
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
      </a>
    </div>
  );
};

export default StoreLinks;
